import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AccessoriesView from "../views/AccessoriesView";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ClothesView from "../views/ClothesView.vue";
import LoginView from "../views/LoginView.vue";
import ProductListView from "../views/ProductListView.vue";
import SingleProductView from "../views/SingleProductView.vue";
import SkateboardsView from "../views/SkateboardsView.vue";
import tack from "../views/tack.vue";
import SignUpView from "../views/SignUpView.vue";
import MyAccountView from "../views/MyAccountView.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/accessories",
        name: "Accessories",
        component: AccessoriesView,
    },
    {
        path: "/cart",
        name: "Cart",
        component: CartView,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: CheckoutView,
    },
    {
        path: "/clothes",
        name: "Clothes",
        component: ClothesView,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
    {
        path: "/products",
        name: "ProductList",
        component: ProductListView,
    },

    {
        path: "/singleproduct/:id",
        name: "SingleProduct",
        component: SingleProductView,
    },
    {
        path: "/skateboards",
        name: "Skateboards",
        component: SkateboardsView,
    },
    {
        path: "/tack",
        name: "tack",
        component: tack,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUpView,
    },
    {
        path: "/myaccount",
        name: "MyAccount",
        component: MyAccountView,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
