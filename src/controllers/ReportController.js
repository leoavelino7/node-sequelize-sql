const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // Encontrar todos os usuários que tem e-mail que termina com @email.com
        // Desses usuário quero buscar todos que moram na rua "Av. Paulista"
        // Desses usuários quero buscar as tecnologias que começam com Node
        
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@email.com'
                }
            },
            include: [
                { association:'addresses', where: { street: 'Av. Paulista' } },
                { 
                    association: 'techs', 
                    required: false,
                    where : {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    },
                },
            ]
        })
        return res.json(users);
    }
};