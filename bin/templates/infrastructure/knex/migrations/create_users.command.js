module.exports = {
    get: function (resource) {
      return `import { Knex } from 'knex';

exports.up = function (knex: Knex): Promise<unknown> {
return Promise.all([
    knex.schema
    .createTable('users', t => {
        t.increments('id').primary();
        t.string('name', 255).notNullable();
        t.string('email', 255).notNullable().unique();
        t.string('password_hash', 255).notNullable();
        t.timestamps(true, true);
    })
    .then(function () {
        return knex('users').insert([
        {
            name: 'Teste',
            email: 'teste@hotmail.com',
            password_hash: '$2b$10$FxlkVG40VXlYxF/bsgBtoO3LJl4Gxlo1nQvgW/mL3hkmOyDmpldRO',
        },
        ]);
    }),
]);
};

export async function down(knex: Knex): Promise<void> {
return knex.schema.dropTable('users');
}      
`;
    },
  };
  