const SelfCheckout = require("./SelfCheckout");
const apple = {
  barcode: 123,
  price: 5,
};
const pineapple = {
  barcode: 5367,
  price: 80,
};

describe("Checkout", () => {
  test("scanning a barcode returns the product from the catalogue", function () {
    const product = SelfCheckout.scanBarcode("123");
    expect(product).toEqual(apple);
  });

  beforeEach(() => {
    // her senaryodan sonra basketi bosalt
    SelfCheckout.clearBasket();
    return;
  });

  // idempotent
  // birbirinden bagimsiz
  test("adds a product to my shopping basket", () => {
    SelfCheckout.addItemToBasket(apple);
    const shoppingBasket = SelfCheckout.getShoppingBasket();
    expect(shoppingBasket).toContainEqual(apple);
  });

  test("see total of all items in the shopping basket", () => {
    SelfCheckout.addItemToBasket(pineapple); // 80
    SelfCheckout.addItemToBasket(apple); // 5
    SelfCheckout.addItemToBasket(apple); // 5
    const basketTotal = SelfCheckout.getBasketTotal();
    expect(basketTotal).toBe(90);
  });

  test("remove an item from the basket", () => {
    // pineapple
    SelfCheckout.addItemToBasket(pineapple);
    let shoppingBasket = SelfCheckout.getShoppingBasket();
    // teyit et pinapple sepettedir
    expect(shoppingBasket).toContainEqual(pineapple);

    // pineapple 'i sepetten cikar
    SelfCheckout.removeFromBasket(pineapple);
    shoppingBasket = SelfCheckout.getShoppingBasket();
    // ciktigini teyit ettik...
    expect(shoppingBasket).not.toContainEqual(pineapple);
  })
});
