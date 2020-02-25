import React from 'react'

import IndexPage from "./pages/IndexPage/index";
import ProductPage from "./pages/ProductPage/index";
import AboutPage from "./pages/AboutPage/index";
import ContactPage from "./pages/ContactPage/index";
import ServicePage from "./pages/ServicePage/index";
import CheckoutPage from "./pages/CheckoutPage/index";

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
        path: '/service',
        exact: false,
        main: () => <ServicePage />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <CheckoutPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]
