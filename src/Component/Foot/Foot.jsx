import React from 'react';
import { Link } from 'react-router-dom';
import StyleFoot from './Foot.module.css'
const Foot = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className={StyleFoot.footCol1}>
                                <h3>About Strategia</h3>
                                <p>We help businesses grow through smart, simple marketing strategies.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className={StyleFoot.footCol2}>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link className={StyleFoot.text} to="#">Home</Link></li>
                                    <li><Link className={StyleFoot.text} to="#">Packages</Link></li>
                                    <li><Link className={StyleFoot.text} to="#">Booking</Link></li>
                                    <li><Link className={StyleFoot.text} to="#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3">
                            <div className={StyleFoot.footCol3}>
                                <h3>Contact</h3>
                                <h5><i class="fa-solid fa-envelope"></i>  Mohamedyasser111811@gmail.com</h5>
                                <h5><i class="fa-solid fa-phone"></i> +20 11 410 65933</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="footcol4">
                                <h3>Follow Us</h3>
                                <Link className={StyleFoot.btnIcon} to="https://www.instagram.com/mohamedyaser6678?igsh=MXMydDV4ampjMmFsNw%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></Link>
                                <Link className={StyleFoot.btnIcon} to="https://www.linkedin.com/in/mohamed-yasser-97a268291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class="fa-brands fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className={StyleFoot.Propertyfields}>
                        <p>© 2025 Strategia — Marketing made simple.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Foot;
