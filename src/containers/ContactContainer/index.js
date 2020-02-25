import React, { Fragment } from 'react';

const ContactContainer = () => {
    return (
        <Fragment>
            <div>
                {/* banner */}
                <div className="inner_page-banner one-img">
                </div>
                {/*//banner */}
                {/* short */}
                <div className="using-border py-3">
                    <div className="inner_breadcrumb  ml-4">
                        <ul className="short_ls">
                            <li>
                                <a href="index.html">Home</a>
                                <span>/ /</span>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                {/* //short*/}
                {/*contact */}
                <section className="contact py-lg-4 py-md-3 py-sm-3 py-3">
                    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                        <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Contact US</h3>
                        <div className="contact-list-grid">
                            <form action="#" method="post">
                                <div className=" agile-wls-contact-mid">
                                    <div className="form-group contact-forms">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group contact-forms">
                                        <input type="email" className="form-control" placeholder="Enter" />
                                    </div>
                                    <div className="form-group contact-forms">
                                        <input type="text" className="form-control" placeholder="Phone" />
                                    </div>
                                    <div className="form-group contact-forms">
                                        <textarea className="form-control" rows={3} defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-block sent-butnn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*//contact-map */}
                </section>
                {/*contact */}
            </div>
        </Fragment>
    )
}

export default ContactContainer;
