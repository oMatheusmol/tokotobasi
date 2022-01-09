import { Knex } from 'knex';

export async function up(knex: Knex): Promise<unknown> {
return Promise.all([
    knex.schema
    .createTable('user_roles', t => {
        t.integer('user_id').unsigned().notNullable();
        t.integer('role_id').unsigned().notNullable();
        t.timestamps(true, true);
        t.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
        t.foreign('role_id').references('roles.id').onDelete('CASCADE').onUpdate('CASCADE');
        t.primary(['user_id', 'role_id']);
    })
    .then(function () {
        return knex('user_roles').insert([
        { user_id: '1', role_id: '1' },
        ]);
    }),
]);
}

export async function down(knex: Knex): Promise<void> {
return knex.schema.dropTable('user_roles');
}      
