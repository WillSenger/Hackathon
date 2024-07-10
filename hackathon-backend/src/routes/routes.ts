import express, { Request, Response, NextFunction } from 'express';
import pool from '../database/db';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Rota para cadastrar um avaliador
router.post('/evaluators', async (req: Request, res: Response) => {
  const { nome, login, senha } = req.body;
  console.log('Cadastro de Avaliador:', nome, login, senha);
  const hashedPassword = await bcrypt.hash(senha, 10);
  try {
    const newEvaluator = await pool.query(
      'INSERT INTO avaliadores (nome, login, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, login, hashedPassword]
    );
    res.status(201).json(newEvaluator.rows[0]);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para buscar todos avaliadores
router.get('/evaluators', async (req: Request, res: Response) => {
  try {
    const evaluators = await pool.query('SELECT * FROM avaliadores');
    res.status(200).json(evaluators.rows);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para excluir um avaliador
router.delete('/evaluators/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM avaliadores WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para cadastrar uma equipe
router.post('/teams', async (req: Request, res: Response) => {
  const { nome } = req.body;
  try {
    const newTeam = await pool.query('INSERT INTO equipes (nome) VALUES ($1) RETURNING *', [nome]);
    res.status(201).json(newTeam.rows[0]);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para buscar todas as equipes
router.get('/teams', async (req: Request, res: Response) => {
  try {
    const teams = await pool.query('SELECT * FROM equipes');
    res.status(200).json(teams.rows);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para excluir uma equipe
router.delete('/teams/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM equipes WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para cadastrar uma avaliação
router.post('/evaluations', async (req: Request, res: Response) => {
  const { avaliador_id, equipe_id } = req.body;
  try {
    const newEvaluation = await pool.query(
      'INSERT INTO avaliacoes (avaliador_id, equipe_id, notas) VALUES ($1, $2, $3) RETURNING *',
      [avaliador_id, equipe_id, '{}']
    );
    res.status(201).json(newEvaluation.rows[0]);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Middleware para verificar login
function verifyLogin(req: Request, res: Response, next: NextFunction) {
  const { avaliadorId } = req.body;
  if (!avaliadorId) {
    return res.status(401).json({ error: 'Avaliador não autenticado' });
  }
  next();
}

// Rota para atualizar uma avaliação
router.put('/evaluations/:id', verifyLogin, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { notas } = req.body;
  try {
    const updatedEvaluation = await pool.query(
      'UPDATE avaliacoes SET notas = $1 WHERE id = $2 RETURNING *',
      [notas, id]
    );
    res.status(200).json(updatedEvaluation.rows[0]);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para listar todas as avaliações
router.get('/evaluations', async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT avaliacoes.id, equipes.nome AS teamName, avaliadores.nome AS evaluatorName, avaliacoes.notas
      FROM avaliacoes
      JOIN equipes ON avaliacoes.equipe_id = equipes.id
      JOIN avaliadores ON avaliacoes.avaliador_id = avaliadores.id
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para buscar avaliações por equipe
router.get('/evaluations/team/:teamId', async (req: Request, res: Response) => {
  const { teamId } = req.params;
  try {
    const evaluations = await pool.query('SELECT * FROM avaliacoes WHERE equipe_id = $1', [teamId]);
    res.status(200).json(evaluations.rows);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para buscar avaliações por avaliador
router.get('/evaluations/evaluator/:evaluatorId', async (req: Request, res: Response) => {
  const { evaluatorId } = req.params;
  try {
    const evaluations = await pool.query('SELECT * FROM avaliacoes WHERE avaliador_id = $1', [evaluatorId]);
    res.status(200).json(evaluations.rows);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para obter estatísticas
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const teamsCount = await pool.query('SELECT COUNT(*) FROM equipes');
    const evaluatorsCount = await pool.query('SELECT COUNT(*) FROM avaliadores');
    const evaluationsCount = await pool.query('SELECT COUNT(*) FROM avaliacoes WHERE notas != \'{}\''); // Verifique se as notas não são um objeto vazio

    const stats = {
      teams: parseInt(teamsCount.rows[0].count, 10),
      evaluators: parseInt(evaluatorsCount.rows[0].count, 10),
      evaluations: parseInt(evaluationsCount.rows[0].count, 10)
    };

    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota de login
router.post('/login', async (req: Request, res: Response) => {
  const { login, senha } = req.body;
  console.log('Login:', login);
  console.log('Senha:', senha);

  try {
    const evaluator = await pool.query('SELECT * FROM avaliadores WHERE login = $1', [login]);
    if (evaluator.rows.length === 0) {
      return res.status(404).json({ error: 'Avaliador não encontrado' });
    }

    const validPassword = await bcrypt.compare(senha, evaluator.rows[0].senha);
    if (!validPassword) {
      return res.status(403).json({ error: 'Senha inválida' });
    }

    res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para atribuir um avaliador a uma equipe
router.post('/assign', async (req: Request, res: Response) => {
  const { evaluatorId, teamId } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO avaliacoes (avaliador_id, equipe_id, notas) VALUES ($1, $2, $3) RETURNING *',
      [evaluatorId, teamId, '{}'] // Inicializando a coluna notas com um objeto vazio
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Rota para carregar equipes atribuídas a um avaliador específico
router.get('/teams-assigned/:evaluatorId', async (req: Request, res: Response) => {
  const { evaluatorId } = req.params;
  try {
    const teams = await pool.query(
      'SELECT equipes.id, equipes.nome FROM equipes ' +
      'JOIN avaliacoes ON equipes.id = avaliacoes.equipe_id ' +
      'WHERE avaliacoes.avaliador_id = $1',
      [evaluatorId]
    );
    res.status(200).json(teams.rows);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
