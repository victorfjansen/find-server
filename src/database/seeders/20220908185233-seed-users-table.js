'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [
            {
                name: 'Victor',
                email: 'victrofjansen@gmail.com',
                bio: 'Hy im victor',
                phoneNumber: 'aoba',
                openToWork: true,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null);
    },
};
