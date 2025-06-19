const { Client } = require("pg");

// Update these values with your PostgreSQL credentials
const user = "postgres";
const password = "test";
const host = "localhost";
const port = 5432;
const databaseToDrop = "state_registration_deadlines";

// Connect to the default 'postgres' database
const client = new Client({
    user,
    host,
    database: "postgres",
    password,
    port,
});

async function dropDatabase() {
    try {
        await client.connect();
        await client.query(`DROP DATABASE IF EXISTS ${databaseToDrop};`);
        console.log(`Database "${databaseToDrop}" dropped successfully.`);
    } catch (err) {
        console.error("Error dropping database:", err);
    } finally {
        await client.end();
    }
}

dropDatabase();