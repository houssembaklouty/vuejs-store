import axios from '@axios'

const actions = {
  fetchProducts(ctx, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get('/apps/ecommerce/products', { params: payload })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
  
  fetchProduct(ctx, { productId }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/apps/ecommerce/products/${productId}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  fetchWishlistProducts() {
    return new Promise((resolve, reject) => {
      axios
        .get('/apps/ecommerce/wishlist')
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  fetchCartProducts() {
    return new Promise((resolve, reject) => {
      axios
        .get('/apps/ecommerce/cart')
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  // ------------------------------------------------
  // Product Actions
  // ------------------------------------------------
  addProductInWishlist(ctx, { productId }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/apps/ecommerce/wishlist', { productId })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  removeProductFromWishlist(ctx, { productId }) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/apps/ecommerce/wishlist/${productId}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  addProductInCart(ctx, { productId }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/apps/ecommerce/cart', { productId })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },

  removeProductFromCart(ctx, { productId }) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/apps/ecommerce/cart/${productId}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  },
}

export default actions