'use strict';


module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('posts', [{
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed.',
            user_id: '1',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, ]);

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('posts');

    }
};