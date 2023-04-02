//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()


//iniciar o objeto de banco de dados 
const db = new sqlite3.Database("./src/database/database.bd")



module.exports = db
// utilizar o objeto do banco de dados, para nossas operações

 /* db.serialize(() => {
  //criar uma tabela
 db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
   `)
  // inserir dados na tabela
    const query = `
   INSERT INTO places (
     image,
     name,
     address,
     address2,
     state,
     city,
     items
   ) VALUES (
    ?,?,?,?,?,?,?
   );
   `
   const values = [
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "Papersider",
    "guilherme Gemballa, jardim américa",
    "Número 327",
    "Santa Catarima",
    "Rio do sul",
    "Residuos Eletrônicos, Lâmpadas"
   ]

   function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }
    console.log("cadastrado com sucesso")
    console.log(this)
   }
   db.run(query, values, afterInsertData)

  //consultar os dados da tabela
   db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }
    console.log("Aqui estão seus registros")
    console.log(rows)
   })


  //Deletar um dado da tabela
  db.run(`DELETE FROM places WHERE id = ?`, [11], function(err) {
    if(err) {
      return console.log(err)
    }
    console.log("registro deletado com sucesso")
  })
})*/