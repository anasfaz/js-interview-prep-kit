const createCounter = () => {
  let count = 0;
  const increment = () => {
    count++;
      console.log(count, "inc");
      return count
    };
    
    

  return increment;
};

const counter = createCounter();

console.log(counter());
counter()
counter()
counter()