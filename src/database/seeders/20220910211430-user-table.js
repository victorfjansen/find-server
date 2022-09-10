'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('user', [
            {
                name: 'Victor Jansen',
                email: 'victorfjansen@gmail.com',
                description: 'sou o victor',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'Daniel Silva ',
                email: 'vdanibas@gmail.com',
                description: 'sou o daniel',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete();
    },
};
