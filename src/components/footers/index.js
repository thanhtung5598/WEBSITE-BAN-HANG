import React from 'react';

const Footer = () => (
    <div>
        {/*subscribe-address*/}
        <section className="subscribe">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 map-info-right px-0">
                        <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"> </iframe>
                    </div>
                    <div className="col-lg-6 col-md-6 address-w3l-right text-center">
                        <div className="address-gried ">
                            <span className="far fa-map" />
                            <p>25478 Road St.121<br />USA New Hill</p>
                            <p>
                            </p></div>
                        <div className="address-gried mt-3">
                            <span className="fas fa-phone-volume" />
                            <p> +(000)123 4565<br />+(010)123 4565</p>
                        </div>
                        <div className=" address-gried mt-3">
                            <span className="far fa-envelope" />
                            <p><a href="mailto:info@example.com">info@example1.com</a>
                                <br /><a href="mailto:info@example.com">info@example2.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*//subscribe-address*/}
        <section className="sub-below-address py-lg-4 py-md-3 py-sm-3 py-3">
            <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
                <h3 className="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Get In Touch Us</h3>
                <div className="icons mt-4 text-center">
                    <ul>
                        <li><a href="./"><span className="fab fa-facebook-f" /></a></li>
                        <li><a href="./"><span className="fas fa-envelope" /></a></li>
                        <li><a href="./"><span className="fas fa-rss" /></a></li>
                        <li><a href="./"><span className="fab fa-vk" /></a></li>
                    </ul>
                    <p className="my-3">velit sagittis vehicula. Duis posuere
                      ex in mollis iaculis. Suspendisse tincidunt
                      velit sagittis vehicula. Duis posuere
                      velit sagittis vehicula. Duis posuere
                    </p>
                </div>
                <div className="email-sub-agile">
                    <form action="#" method="post">
                        <div className="form-group sub-info-mail">
                            <input type="email" className="form-control email-sub-agile" placeholder="Email" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn subscrib-btnn">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        {/*//subscribe*/}
        {/* footer */}
        <footer className="py-lg-4 py-md-3 py-sm-3 py-3 text-center">
            <div className="copy-agile-right">
                <p>
                    © 2018 Toys-Shop. All Rights Reserved | Design by <a href="http://www.W3Layouts.com" >W3Layouts</a>
                </p>
            </div>
        </footer>
    </div>
)

export default Footer;