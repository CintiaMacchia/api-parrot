'use strict';

const { faker } = require('@faker-js/faker');


let arrayFaker = [];

for (let i = 0; i <= 10; i++) {
    arrayFaker.push({
        nome: faker.name.findName(),
        email: faker.internet.email(),
        apto: faker.address.buildingNumber(),
        password: faker.random.alphaNumeric(8),
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', arrayFaker);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users');

    }
};