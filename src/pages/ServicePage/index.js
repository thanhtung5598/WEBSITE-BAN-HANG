import React, { Component } from 'react'

// components
import Layout from "./../../components/layouts/index";
import ServiceContainer from "./../../containers/ServiceContainer/index";

class IndexPage extends Component {
    render() {
        return (
            <Layout>
                <ServiceContainer />
            </Layout>
        )
    }
}

export default IndexPage;