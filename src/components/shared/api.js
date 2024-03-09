import axios from 'axios'

import url from './url.js'

export default {
  products: {
    getAllProducts: async () => {
      return axios({
        method: 'GET',
        url: url.BASE_API + 'products',
      })
    },
    getAllProduct: async () => {
      return axios({
        method: 'GET',
        url: url.proxy_api + 'products',
      })
    },
    getSingleProduct: async (productId) => {
      // console.log(productId)
      return axios({
        method: 'GET',
        url: url.proxy_api + 'products/' + productId,
      })
    },
    deleteProduct: async (productId) => {
      return axios({
        method: 'DELETE',
        url: url.proxy_api + 'products/' + productId,
      })
    },
  },

}