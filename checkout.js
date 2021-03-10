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

const itemsForSale = [apple, banana, orange, pineapple, kiwi];
const basket = [];

function scanItem(barcode) {
  for (let i = 0; i < itemsForSale.length; i++) {
    if (itemsForSale[i].barcode === barcode) {
      return itemsForSale[i];
    }
  }
  return undefined;
}

function addItemToBasket(item) {
  basket.push(item);
}

function basketPrice() {
  return basket.reduce((runningTotal, basketItem) => {
    return runningTotal + basketItem.price;
  }, 0);
}

function removeItem(itemToRemove) {
  const itemIndex = basket.findIndex((basketItem) => {
    return basketItem.barcode === itemToRemove.barcode;
  });

  basket.splice(itemIndex, 1);
}

module.exports = {
  scanItem,
  basket,
  addItemToBasket,
  basketPrice,
  removeItem,
};
