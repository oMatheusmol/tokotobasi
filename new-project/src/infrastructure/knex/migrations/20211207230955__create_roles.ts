import { Knex } from 'knex';

export async function up(knex: Knex): Promise<unknown> {
return Promise.all([
    knex.schema
    .createTable('roles', t => {
        t.increments('id').primary();
        t.string('name', 255).notNullable().unique();
        t.string('description', 255);
        t.timestamps(true, true);
    })
    .then(function () {
        return knex('roles').insert([
        { name: 'Root', description: 'Root user' },
        { name: 'Financial', description: 'Financial user' },
        { name: 'Salesman', description: 'Salesman user' },
        { name: 'Purchaser', description: 'Purchaser user' },
        ]);
    }),
]);
}

export async function down(knex: Knex): Promise<void> {
return knex.schema.dropTable('roles');
}  
