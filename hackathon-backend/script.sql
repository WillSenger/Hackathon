CREATE TABLE avaliadores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    login VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE equipes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,
    avaliador_id INT NOT NULL REFERENCES avaliadores(id),
    equipe_id INT NOT NULL REFERENCES equipes(id),
    notas JSONB NOT NULL
);