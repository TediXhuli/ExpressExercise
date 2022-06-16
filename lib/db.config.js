import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Password",
  database: "Tedi",
});

export const DbConnection = () => {
  connection.connect();
};
