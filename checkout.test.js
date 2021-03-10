const {
  scanItem,
  basket,
  addItemToBasket,
  basketPrice,
  removeItem,
} = require("./checkout");

let pineapple;
let orange;

describe("Self checkout", () => {
  beforeEach(() => {
    orange = {
      barcode: 789,
      price: 7,
    };
    pineapple = {
      barcode: 5367,
      price: 80,
    };
    basket.length = 0;
  });
  describe("scanItem", () => {
    it("pineapple", () => {
      const result = scanItem(pineapple.barcode);
      expect(result).toEqual(pineapple);
    });
    it("orange", () => {
      const result = scanItem(orange.barcode);
      expect(result).toEqual(orange);
    });
    it("invalid item", () => {
      const result = scanItem(1244);
      expect(result).toBeFalsy();
    });
  });
  describe("addToBasket", () => {
    it("add pineapple", () => {
      expect(basket).toHaveLength(0);

      addItemToBasket(pineapple);

      expect(basket).toContain(pineapple);
      expect(basket).toHaveLength(1);
    });

    it("add orange", () => {
      expect(basket).toHaveLength(0);

      addItemToBasket(orange);

      expect(basket).toContain(orange);
      expect(basket).toHaveLength(1);
    });
  });
  describe("basketPrice", () => {
    it("zero items", () => {
      const result = basketPrice();
      expect(result).toBe(0);
    });

    it("one pineapple", () => {
      expect(basket).toHaveLength(0);

      addItemToBasket(pineapple);

      expect(basket).toHaveLength(1);

      const result = basketPrice();
      expect(result).toBe(80);
    });
    it("one pineapple and two oranges", () => {
      expect(basket).toHaveLength(0);

      addItemToBasket(pineapple);
      addItemToBasket(orange);
      addItemToBasket(orange);

      expect(basket).toHaveLength(3);

      const result = basketPrice();
      expect(result).toBe(94);
    });
  });
  describe("removeItem", () => {
    it("remove 1 item", () => {
      expect(basket).toHaveLength(0);
      addItemToBasket(pineapple);
      expect(basket).toHaveLength(1);

      removeItem(pineapple);

      expect(basket).not.toContain(pineapple);
      expect(basket).toHaveLength(0);
    });
    it("remove 2 items", () => {
      expect(basket).toHaveLength(0);
      addItemToBasket(pineapple);
      addItemToBasket(orange);
      expect(basket).toHaveLength(2);

      removeItem(orange);

      expect(basket).not.toContain(orange);
      expect(basket).toContain(pineapple);
      expect(basket).toHaveLength(1);
    });
  });
});
