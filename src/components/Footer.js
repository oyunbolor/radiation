import React from "react";
import Figure from 'react-bootstrap/Figure';

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container-fluid text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-2">
                            <h5 className="text-sitename">Цацрагийн мэдээллийн сан</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-4 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Холбоос хаяг</h5>
                            <ul className="list-unstyled">
                                <div className="row">
                                    <Figure>
                                        <Figure.Image
                                            width={80}
                                            height={80}
                                            alt="Байгаль орчин, аялал жуулчлалын яам"
                                            src="./logo2.png"
                                        />
                                    </Figure>
                                    <li><a className="link" href="#!">Байгаль орчин, аялал жуулчлалын яам.</a></li>
                                </div>
                            </ul>
                            <ul className="list-unstyled">
                                <Figure>
                                    <Figure.Image
                                        width={80}
                                        height={80}
                                        alt="Байгаль орчин, аялал жуулчлалын яам"
                                        src="./irimhe_logo.png"
                                    />
                                </Figure>
                                <li><a className="link" href="#!">Ус цаг уур, орчны судалгаа, мэдээллийн хүрээлэн.</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 mb-md-1 mb-3">
                            <h5 className="text-uppercase">Холбоо барих</h5>
                            <ul className="list-unstyled">
                                <li><a className="link" href="#!">Жуулчны гудамж-5, Бага тойруу-3, Улаанбаатар 15160</a></li>
                                <li><a className="link" href="#!">+976-11-327982</a></li>
                                <li><a className="link" href="#!">support@eic.mn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="https://eic.mn/"> eic.mn</a>
                </div>
            </div>
        </div>
    );
}
