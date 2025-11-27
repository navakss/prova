CREATE DATABASE equipamento_esportivos;

USE equipamento_esportivos;

CREATE TABLE alunos (
	id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(200),
    turma varchar(200)
);

CREATE TABLE equipamentos (
	id int AUTO_INCREMENT PRIMARY KEY,
    nome varchar(200),
    categoria varchar(200),
    quantidade int
);

CREATE TABLE locacoes (
	id int AUTO_INCREMENT PRIMARY KEY,
    data_locacao date,
    data_devolucao date,
    id_equipamento int,
    id_aluno int,
    FOREIGN KEY (id_equipamento) REFERENCES equipamentos(id),
    FOREIGN KEY (id_aluno) REFERENCES alunos(id)
);

INSERT INTO alunos (nome, turma) VALUES
('Lucas Almeida', '1A'),
('Maria Fernanda', '2B'),
('João Pedro', '3A'),
('Ana Beatriz', '1B'),
('Guilherme Santos', '2A');

INSERT INTO equipamentos (nome, categoria, quantidade) VALUES
('Bola de Futebol', 'Esportes coletivos', 10),
('Corda de Pular', 'Condicionamento', 25),
('Halter 5kg', 'Musculação', 15),
('Cone de Treinamento', 'Treinamento funcional', 30),
('Tapete de Yoga', 'Alongamento', 20);

INSERT INTO locacoes (data_locacao, data_devolucao, id_equipamento, id_aluno) VALUES
('2025-01-10', '2025-01-11', 1, 2),
('2025-01-12', '2025-01-12', 3, 1),
('2025-01-13', '2025-01-14', 5, 3),
('2025-01-15', '2025-01-16', 2, 4),
('2025-01-18', '2025-01-19', 4, 5);
