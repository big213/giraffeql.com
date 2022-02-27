import * as Knex from "knex";

export async function up(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.createTable("user", function (table) { table.string("id").notNullable().primary();table.string("name").notNullable();table.string("firebase_uid").notNullable().unique();table.string("email").notNullable().unique();table.string("avatar").nullable();table.integer("role").notNullable().defaultTo(2);table.jsonb("permissions").nullable();table.boolean("is_public").notNullable().defaultTo(true);table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable(); }),
knex.schema.createTable("apiKey", function (table) { table.string("id").notNullable().primary();table.string("name").notNullable();table.string("code").notNullable().unique();table.string("user").notNullable();table.jsonb("permissions").nullable();table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable(); }),
knex.schema.createTable("file", function (table) { table.string("id").notNullable().primary();table.string("name").notNullable();table.integer("size").notNullable();table.string("location").notNullable();table.string("content_type").notNullable();table.string("parent_key").nullable();table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable(); }),
knex.schema.createTable("giraffeSpecies", function (table) { table.string("id").notNullable().primary();table.string("name").notNullable();table.string("scientific_name").notNullable();table.string("avatar").nullable();table.text("description").nullable();table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable(); }),
knex.schema.createTable("giraffeSubspecies", function (table) { table.string("id").notNullable().primary();table.string("species").notNullable();table.string("name").notNullable();table.string("scientific_name").notNullable();table.string("avatar").nullable();table.text("description").nullable();table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable(); }),
knex.schema.createTable("giraffe", function (table) { table.string("id").notNullable().primary();table.string("subspecies").notNullable();table.string("name").notNullable();table.string("avatar").nullable();table.text("description").nullable();table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable(); }),
knex.schema.createTable("userUserFollowLink", function (table) { table.string("id").notNullable().primary();table.string("user").notNullable();table.string("target").notNullable();table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable();table.unique(["user","target"]); }),
knex.schema.createTable("userGiraffeFollowLink", function (table) { table.string("id").notNullable().primary();table.string("user").notNullable();table.string("target").notNullable();table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());table.dateTime("updated_at").nullable();table.string("created_by").notNullable();table.unique(["user","target"]); }),

  ])
}

export async function down(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.dropTable("user"),knex.schema.dropTable("apiKey"),knex.schema.dropTable("file"),knex.schema.dropTable("giraffeSpecies"),knex.schema.dropTable("giraffeSubspecies"),knex.schema.dropTable("giraffe"),knex.schema.dropTable("userUserFollowLink"),knex.schema.dropTable("userGiraffeFollowLink")
  ]);
}
