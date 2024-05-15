const createProduct = () => {
  let products = {};

  const addProduct = (name, price) => {
    if (products[name]) {
      console.log(`Product '${name}' already exists`);
    } else {
        products[name] = price;
        console.log(`Product '${name}' added with price ${price}`);
    }
    };
    
    const deleteProduct = (name) => {
        if (!products[name]) {
            console.log(`Product '${name}' does not exist.`);
        } else {
            delete products[name]
            console.log(`Product '${name}' deleted.`);
        }
    }
    const totalPrice = () => {
        let totalPrice = 0;
        for (let product in products) {
            totalPrice+= products[product]
        }

        return totalPrice
    }

    return {
        addProduct,
        deleteProduct,
        totalPrice
    }
};


const productCalc= createProduct()

productCalc.addProduct('apple', 120)

productCalc.addProduct('orange', 80)
productCalc.addProduct('orange', 80)
productCalc.addProduct('orange', 80)
productCalc.deleteProduct('orange')

const total = productCalc.totalPrice()

console.log(total);