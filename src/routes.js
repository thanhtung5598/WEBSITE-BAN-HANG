import React from 'react'

import IndexPage from "./pages/IndexPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import SinglePage from "./pages/SinglePage";

import NotFoundPage from "./pages/NotFoundPage/index";

export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <IndexPage />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductPage />
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutPage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <CheckoutPage />
    },
    {
      path: '/single',
      exact: false,
      main: () => <SinglePage />
  },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]
