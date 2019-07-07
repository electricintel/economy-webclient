import Vue from "vue";
import Router from "vue-router";

import Dashboard from "./views/Dashboard/index.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Login,
      name: "login"
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/",
          name: "dashboard-index",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/Dashboard/Home.vue")
        },
        {
          path: "home",
          name: "dashboard-home",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/Dashboard/Home.vue")
        },
        {
          path: "about",
          name: "dashboard-about",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "./views/Dashboard/About.vue"
            )
        },
        {
          path: "item",
          name: "dashboard-item",
          component: () =>
            import(
              /* webpackChunkName: "item" */ "./views/Dashboard/Item/index.vue"
            )
        },
        {
          path: "item/new",
          name: "dashboard-item-new",
          component: () =>
            import(
              /* webpackChunkName: "item" */ "./views/Dashboard/Item/New/index.vue"
            )
        },
        {
          path: "item/:id",
          name: "dashboard-item-detail",
          component: () =>
            import(
              /* webpackChunkName: "item" */ "./views/Dashboard/Item/Detail/index.vue"
            )
        },
        {
          path: "currency",
          name: "dashboard-currency",
          component: () =>
            import(
              /* webpackChunkName: "currency" */ "./views/Dashboard/Currency/index.vue"
            )
        },
        {
          path: "currency/new",
          name: "dashboard-currency-new",
          component: () =>
            import(
              /* webpackChunkName: "currency" */ "./views/Dashboard/Currency/New/index.vue"
            )
        },
        {
          path: "currency/:id",
          name: "dashboard-currency-detail",
          component: () =>
            import(
              /* webpackChunkName: "currency" */ "./views/Dashboard/Currency/Detail/index.vue"
            )
        },
        {
          path: "player",
          name: "dashboard-player",
          component: () =>
            import(
              /* webpackChunkName: "player" */ "./views/Dashboard/Player/index.vue"
            )
        },
        {
          path: "player/new",
          name: "dashboard-player-new",
          component: () =>
            import(
              /* webpackChunkName: "player" */ "./views/Dashboard/Player/New/index.vue"
            )
        },
        {
          path: "player/:id",
          name: "dashboard-player-detail",
          component: () =>
            import(
              /* webpackChunkName: "player" */ "./views/Dashboard/Player/Detail/index.vue"
            )
        },
        {
          path: "storage",
          name: "dashboard-storage",
          component: () =>
            import(
              /* webpackChunkName: "storage" */ "./views/Dashboard/Storage/index.vue"
            )
        },
        {
          path: "storage/new",
          name: "dashboard-storage-new",
          component: () =>
            import(
              /* webpackChunkName: "storage" */ "./views/Dashboard/Storage/New/index.vue"
            )
        },
        {
          path: "storage/:id",
          name: "dashboard-storage-detail",
          component: () =>
            import(
              /* webpackChunkName: "storage" */ "./views/Dashboard/Storage/Detail/index.vue"
            )
        },
        {
          path: "shop",
          name: "dashboard-shop",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/index.vue"
            )
        },
        {
          path: "shop/new",
          name: "dashboard-shop-new",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/New/index.vue"
            )
        },
        {
          path: "shop/product",
          name: "dashboard-shop-product",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Product/index.vue"
            )
        },
        {
          path: "shop/product/new",
          name: "dashboard-shop-product-new",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Product/New/index.vue"
            )
        },
        {
          path: "shop/product/:id",
          name: "dashboard-shop-product-detail",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Product/Detail/index.vue"
            )
        },
        {
          path: "shop/product/:id/item",
          name: "dashboard-shop-product-detail-item",
          // tslint:disable-next-line
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Product/Detail/Item/index.vue"
            )
        },
        {
          path: "shop/product/:id/price",
          name: "dashboard-shop-product-detail-price",
          // tslint:disable-next-line
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Product/Detail/Price/index.vue"
            )
        },
        {
          path: "shop/product/:id/price/:priceId",
          name: "dashboard-shop-product-detail-price-detail",
          // tslint:disable-next-line
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Product/Detail/Price/Detail/index.vue"
            )
        },
        {
          path: "shop/product/:id/price/new",
          name: "dashboard-shop-product-detail-price-new",
          // tslint:disable-next-line
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Product/Detail/Price/New/index.vue"
            )
        },
        {
          path: "shop/:id",
          name: "dashboard-shop-detail",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Detail/index.vue"
            )
        },
        {
          path: "shop/:id/product",
          name: "dashboard-shop-detail-product",
          component: () =>
            import(
              /* webpackChunkName: "shop" */ "./views/Dashboard/Shop/Detail/Product/index.vue"
            )
        },
        {
          path: "iam",
          name: "dashboard-iam",
          component: () =>
            import(
              /* webpackChunkName: "iam" */ "./views/Dashboard/IAM/index.vue"
            )
        },
        {
          path: "config",
          name: "dashboard-config",
          component: () =>
            import(
              /* webpackChunkName: "config" */ "./views/Dashboard/Config/index.vue"
            )
        },
        {
          path: "logout",
          name: "dashboard-logout",
          component: () =>
            import(
              /* webpackChunkName: "logout" */ "./views/Dashboard/Logout.vue"
            )
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next();
    return;
  }

  if (!localStorage.getItem("token")) {
    next("/");
  }

  next();
});

export default router;
