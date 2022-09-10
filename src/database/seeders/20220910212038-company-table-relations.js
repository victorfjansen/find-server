'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const [user] = await queryInterface.sequelize.query('SELECT id FROM user');

        await queryInterface.bulkInsert('company', [
            {
                name: 'FIND',
                description: 'primeira empresa',
                user_id: user[0].id,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'FIND2',
                description: 'primeira empresa2',
                user_id: user[1].id,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDetele('company');
    },
};
