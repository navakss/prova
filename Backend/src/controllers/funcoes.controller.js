const db = require('../data/connection');

// ALUNOS

const CadastrarAluno = async (req, res) => {
    try {
        const { nome, turma } = req.body;
        await db.query(
            'INSERT INTO alunos (nome, turma) VALUES (?, ?)',
            [nome, turma]
        );
        res.status(201).json({ message: 'Aluno cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const ListarAlunos = async (req, res) => {
    try {
        const lista = await db.query('SELECT * FROM alunos;');
        res.status(200).json(lista[0]);
    } catch (error) {
        console.log(error);
    }
};

const AtualizarAluno = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, turma } = req.body;

        await db.query(
            'UPDATE alunos SET nome = ?, turma = ? WHERE id = ?',
            [nome, turma, id]
        );

        res.status(200).json({ message: 'Aluno atualizado com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

const DeletarAluno = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM alunos WHERE id = ?', [id]);
        res.status(200).json({ message: 'Aluno removido com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};


// EQUIPAMENTOS

const CadastrarEquipamento = async (req, res) => {
    try {
        const { nome, categoria, quantidade } = req.body;

        await db.query(
            'INSERT INTO equipamentos (nome, categoria, quantidade) VALUES (?, ?, ?)',
            [nome, categoria, quantidade]
        );

        res.status(201).json({ message: 'Equipamento cadastrado com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const ListarEquipamentos = async (req, res) => {
    try {
        const lista = await db.query('SELECT * FROM equipamentos;');
        res.status(200).json(lista[0]);
    } catch (error) {
        console.log(error);
    }
};

const AtualizarEquipamento = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, categoria, quantidade } = req.body;

        await db.query(
            'UPDATE equipamentos SET nome = ?, categoria = ?, quantidade = ? WHERE id = ?',
            [nome, categoria, quantidade, id]
        );

        res.status(200).json({ message: 'Equipamento atualizado com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

const DeletarEquipamento = async (req, res) => {
    try {
        const { id } = req.params;

        await db.query('DELETE FROM equipamentos WHERE id = ?', [id]);
        res.status(200).json({ message: 'Equipamento removido com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};


// LOCAÇÕES

const CadastrarLocacao = async (req, res) => {
    try {
        const { data_locacao, data_devolucao, id_equipamento, id_aluno } = req.body;

        await db.query(
            'INSERT INTO locacoes (data_locacao, data_devolucao, id_equipamento, id_aluno) VALUES (?, ?, ?, ?)',
            [data_locacao, data_devolucao, id_equipamento, id_aluno]
        );

        res.status(201).json({ message: 'Locação cadastrada com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const ListarLocacoes = async (req, res) => {
    try {
        const lista = await db.query(`
            SELECT 
                l.id,
                l.data_locacao,
                l.data_devolucao,
                a.nome AS aluno,
                e.nome AS equipamento
            FROM locacoes l
            JOIN alunos a ON l.id_aluno = a.id
            JOIN equipamentos e ON l.id_equipamento = e.id;
        `);

        res.status(200).json(lista[0]);
    } catch (error) {
        console.log(error);
    }
};

const AtualizarLocacao = async (req, res) => {
    try {
        const { id } = req.params;
        const { data_locacao, data_devolucao, id_equipamento, id_aluno } = req.body;

        await db.query(
            `
            UPDATE locacoes SET 
                data_locacao = ?, 
                data_devolucao = ?, 
                id_equipamento = ?, 
                id_aluno = ?
            WHERE id = ?
            `,
            [data_locacao, data_devolucao, id_equipamento, id_aluno, id]
        );

        res.status(200).json({ message: 'Locação atualizada com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

const DeletarLocacao = async (req, res) => {
    try {
        const { id } = req.params;

        await db.query('DELETE FROM locacoes WHERE id = ?', [id]);
        res.status(200).json({ message: 'Locação removida com sucesso!' });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    CadastrarAluno,
    ListarAlunos,
    AtualizarAluno,
    DeletarAluno,

    CadastrarEquipamento,
    ListarEquipamentos,
    AtualizarEquipamento,
    DeletarEquipamento,

    CadastrarLocacao,
    ListarLocacoes,
    AtualizarLocacao,
    DeletarLocacao
};
