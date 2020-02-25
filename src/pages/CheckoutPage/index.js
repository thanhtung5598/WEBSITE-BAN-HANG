import React, { Component } from 'react'

// components
import Layout from "./../../components/layouts/index";
import CheckoutContainer from "./../../containers/CheckoutContainer/index";

class IndexPage extends Component {
    render() {
        return (
            <Layout>
                <CheckoutContainer />
            </Layout>
        )
    }
}

export default IndexPage;