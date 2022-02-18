import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AccessoriesView from '../views/AccessoriesView'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ClothesView from '../views/ClothesView.vue'
import LoginView from '../views/LoginView.vue'
import ProductListView from '../views/ProductListView.vue'
import ShoesView from '../views/ShoesView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import SkateboardsView from '../views/SkateboardsView.vue'
import WishListView from '../views/WishListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: AccessoriesView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  },
  {
    path: '/clothes',
    name: 'Clothes',
    component: ClothesView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/productList',
    name: 'ProductList',
    component: ProductListView
  },
  {
    path: '/shoes',
    name: 'Shoes',
    component: ShoesView
  },
  {
    path: '/singleproduct/:id',
    name: 'SingleProduct',
    component: SingleProductView
  },
  {
    path: '/skateboards',
    name: 'Skateboards',
    component: SkateboardsView
  },
  {
    path: '/wishList',
    name: 'WishList',
    component: WishListView
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
