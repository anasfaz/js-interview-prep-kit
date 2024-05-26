function createVendingMachine() {
  const items = ["Cola", "Chips", "Chocolate", "Juice", "Nuts"];
  let coins = 0;

  return function add25() {
    coins += 25;
    if (coins === 100) {
      const randomIndex = Math.floor(Math.random() * items.length);
      coins = 0;
      console.log(`You got some ${items[randomIndex]}`);
    } else if (coins < 100) {
      console.log(`insert ${100 - coins} more coins`);
    }
  };
}

const vendingMachine = createVendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine()
vendingMachine()
vendingMachine()
vendingMachine()
vendingMachine()
