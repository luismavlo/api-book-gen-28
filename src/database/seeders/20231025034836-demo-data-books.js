'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('books', [
      {
        title: "Harry Potter and the Philosopher's Stone",
        synopsis:
          "Harry Potter has been living an ordinary life, constantly abused by his surly and cold aunt and uncle, Vernon and Petunia Dursley and bullied by their spoiled son Dudley since the death of his parents ten years prior. His life changes on the day of his eleventh birthday when he receives a letter of acceptance into a Hogwarts School of Witchcraft and Wizardry, delivered by a half-giant named Rubeus Hagrid after previous letters had been destroyed by Vernon and Petunia. Hagrid reveals to Harry that he is a wizard and has been invited to attend the school, and offers to guide him through the wizarding world. After buying his school supplies from the hidden London street, Diagon Alley, Harry boards the train to Hogwarts via the concealed Platform 9¾ in King's Cross Station.",
        number_pages: 223,
        genre: 'accion',
        editorial: 'Bloomsbury',
        publication_date: '1997-06-26',
        score: 4.45,
        author_id: 2,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        synopsis:
          "Harry Potter has been living an ordinary life, constantly abused by his surly and cold aunt and uncle, Vernon and Petunia Dursley and bullied by their spoiled son Dudley since the death of his parents ten years prior. His life changes on the day of his eleventh birthday when he receives a letter of acceptance into a Hogwarts School of Witchcraft and Wizardry, delivered by a half-giant named Rubeus Hagrid after previous letters had been destroyed by Vernon and Petunia. Hagrid reveals to Harry that he is a wizard and has been invited to attend the school, and offers to guide him through the wizarding world. After buying his school supplies from the hidden London street, Diagon Alley, Harry boards the train to Hogwarts via the concealed Platform 9¾ in King's Cross Station.",
        number_pages: 223,
        genre: 'accion',
        editorial: 'Bloomsbury',
        publication_date: '1997-06-26',
        score: 4.45,
        author_id: 2,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        synopsis:
          "Harry Potter has been living an ordinary life, constantly abused by his surly and cold aunt and uncle, Vernon and Petunia Dursley and bullied by their spoiled son Dudley since the death of his parents ten years prior. His life changes on the day of his eleventh birthday when he receives a letter of acceptance into a Hogwarts School of Witchcraft and Wizardry, delivered by a half-giant named Rubeus Hagrid after previous letters had been destroyed by Vernon and Petunia. Hagrid reveals to Harry that he is a wizard and has been invited to attend the school, and offers to guide him through the wizarding world. After buying his school supplies from the hidden London street, Diagon Alley, Harry boards the train to Hogwarts via the concealed Platform 9¾ in King's Cross Station.",
        number_pages: 223,
        genre: 'accion',
        editorial: 'Bloomsbury',
        publication_date: '1997-06-26',
        score: 4.45,
        author_id: 3,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        synopsis:
          "Harry Potter has been living an ordinary life, constantly abused by his surly and cold aunt and uncle, Vernon and Petunia Dursley and bullied by their spoiled son Dudley since the death of his parents ten years prior. His life changes on the day of his eleventh birthday when he receives a letter of acceptance into a Hogwarts School of Witchcraft and Wizardry, delivered by a half-giant named Rubeus Hagrid after previous letters had been destroyed by Vernon and Petunia. Hagrid reveals to Harry that he is a wizard and has been invited to attend the school, and offers to guide him through the wizarding world. After buying his school supplies from the hidden London street, Diagon Alley, Harry boards the train to Hogwarts via the concealed Platform 9¾ in King's Cross Station.",
        number_pages: 223,
        genre: 'accion',
        editorial: 'Bloomsbury',
        publication_date: '1997-06-26',
        score: 4.45,
        author_id: 1,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    
  }
};
