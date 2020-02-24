import React, { Component } from 'react'

// components
import Layout from "./../../components/layouts/index";
import IndexContainer from "./../../containers/IndexContainer/index";

class IndexPage extends Component {
    render() {
        return (
            <Layout>
                <IndexContainer />
            </Layout>
        )
    }
}

export default IndexPage;