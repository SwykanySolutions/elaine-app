import * as SQLite from 'expo-sqlite';

// Conexão com o Banco de Dados do Sqlite 
export const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase("database.db"),
};

export const verifyAllTables = () => {

    const db  = DatabaseConnection.getConnection();

    db.transaction((txn) => {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='usuario'",
            [],
            function (tx, res) {
                console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS usuario', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS usuario ("id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "nome_usuario" TEXT NOT NULL, "sobrenome_usuario" TEXT NOT NULL, "user_usuario" TEXT NOT NULL, "email_usuario" TEXT NOT NULL, "data_de_nascimento_usuario" DATE NOT NULL, "senha_usuario" TEXT NOT NULL)',
                        []
                    );
                }
            }
        );
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='acesso'",
            [],
            function (tx, res) {
                console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS acesso', []);
                    txn.executeSql(
                        "CREATE TABLE 'acesso' ( 'idAc' NOT NULL PRIMARY KEY AUTOINCREMENT, 'nome' TEXT NOT NULL, 'permisions' TEXT NOT NULL)",
                        []
                    );
                }
            }
        );
    })
}
