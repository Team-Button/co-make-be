require("dotenv").config();

const postgres = {
  client: "pg",
  useNullAsDefault: true,
};

const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
};

module.exports = {
  development: {
    ...sqlite,
    connection: {
      filename: "./database/comake.db3",
    },
  },
  testing: {
    ...sqlite,
    connection: {
      filename: "./database/comake-test.db3",
    },
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
};