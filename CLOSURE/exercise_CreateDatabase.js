function createDatabase() {
  let Storage = ["Apple", "Banana", "Carrot"];

  const addToDB = (value) => {
      Storage.push(value);
      console.log(Storage);
  };

    const clearDB = () => {
        Storage.length = 0;
        console.log(Storage);
  };

  return { addToDB, clearDB };
}


const db = createDatabase()

db.addToDB('Green  Apple')
db.addToDB('strawberry')


const dbmg = createDatabase()

dbmg.addToDB('grape')
dbmg.addToDB('pineapple')