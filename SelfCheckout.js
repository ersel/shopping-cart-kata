const orange = {
  barcode: 789,
  price: 7,
};
const pineapple = {
  barcode: 5367,
  price: 80,
};
const kiwi = {
  barcode: 765,
  price: 25,
};
const apple = {
  barcode: 123,
  price: 5,
};
const banana = {
  barcode: 456,
  price: 6,
};

const productCatalogue = [apple, banana, orange, pineapple, kiwi];
let shoppingBasket = [];

function scanBarcode(scannedBarcode) {
  /*
    // productCatalogue ???
    for(let i = 0; i < productCatalogue.length; i++) {
        if(productCatalogue[i].barcode == scannedBarcode) {
            return productCatalogue[i];
        }
    }
    */

  // Array method
  return productCatalogue.find(function (product) {
    return product.barcode == scannedBarcode;
  });
}

function addItemToBasket(item) {
  shoppingBasket.push(item);
}

function getBasketTotal() {
  // reduce
  return shoppingBasket.reduce((accumulator, product) => {
    // console.log({ accumulator, product });
    return accumulator + product.price;
  }, 0);
}

function clearBasket() {
  shoppingBasket = [];
}

function getShoppingBasket() {
    return shoppingBasket
}

function removeFromBasket(item) {
  // how to remove an item from an arary
  // pop() en sondaki element
  const indexOfItem = shoppingBasket.findIndex(function (product) {
    return product.barcode == item.barcode;
  });
  shoppingBasket.splice(indexOfItem);
}

module.exports = {
  scanBarcode,
  getShoppingBasket,
  addItemToBasket,
  getBasketTotal,
  clearBasket,
  removeFromBasket,
};
