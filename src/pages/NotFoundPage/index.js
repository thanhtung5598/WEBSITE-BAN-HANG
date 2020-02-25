import React, { Component } from 'react'

class IndexPage extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-danger">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Không Tìm thấy pages</strong>
                </div>
            </div>
        )
    }
}

export default IndexPage;