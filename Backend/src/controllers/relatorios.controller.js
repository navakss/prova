const db = require('../data/connection');

const TotalLocacoesPorCategoria = async (req, res) => {
    try {
        const totallocacoes = await db.query(`
            SELECT e.categoria, COUNT(l.id) AS total_locacoes FROM locacoes l INNER JOIN equipamentos e ON l.id_equipamento = e.id GROUP BY e.categoria
        `);

        res.status(200).json(totallocacoes[0]);
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

const TotalLocacoesPorAluno = async (req, res) => {
    try {
        const totalaluno = await db.query(`
            SELECT a.nome AS aluno, COUNT(l.id) AS total_locacoes FROM locacoes l INNER JOIN alunos a ON l.id_aluno = a.id GROUP BY a.nome
        `);

        res.status(200).json(totalaluno[0]);
    } catch (error) {
        
        console.log(error);
        res.status(500).end();
    }
};

const TotalLocacoesPorEquipamento = async (req, res) => {
    try {
        const totalequipamento = await db.query(`
            SELECT e.nome AS equipamento, COUNT(l.id) AS total_locacoes FROM locacoes l INNER JOIN equipamentos e ON l.id_equipamento = e.id GROUP BY e.nome
        `);

        res.status(200).json(totalequipamento[0]);
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    TotalLocacoesPorCategoria,
    TotalLocacoesPorAluno,
    TotalLocacoesPorEquipamento
};
