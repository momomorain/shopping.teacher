import { defineStore } from 'pinia';

export const useShoppingCart = defineStore('shopping-cart', {
  // 共用的變數
  state: () => {
    return {
      cartData: [],
      checkData: [],
      buyerData: {
        name: '',
        phone: '',
        address: '',
        email: '',
        paymentMethod: '',
        deliver: '',
      },
    };
  },
  // 共用的函式

  /**
   * 這裡是註解!!!!!!!!
   * 放產品進去到購物車
   * @param {object} product 產品資料
   */

  actions: {
    addCart(product) {
      const existProduct = this.existProduct(product);
      if (existProduct) {
        existProduct.quantity = product.quantity;
      } else {
        this.cartData.push(product);
      }
    },
    existProduct(product) {
      return this.cartData.find((item) => item.id === product.id);
    },
    addCheckedData(product) {
      if (product.checked) {
        this.checkData.push(product);
        console.log(this.checkData);
      } else {
        this.checkData = this.cartData.filter((item) => item.id === product.id);
      }
    },
    countTotal() {
      let count = 0;
      let price = 0;
      this.checkData.forEach((item) => {
        count += item.quantity;
        price += (item.quantity * item.price);
      });

      return { count: count, price: price };
    },
    resetCartData() {
      this.cartData = [];
    },
  },
});
