import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './img/Logo.svg';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="links">

                    <div className="left">
                        <div className='logoContainer'>
                            <img alt="logo" src={logo} className="logoImg" />
                        </div>
                        <div className="sns">
                            <div className="facebook">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </div>
                            <div className="twitter">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </div>
                            <div className="instagram">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </div>
                        </div>

                    </div>
                    <div className='right'>
                        <ul className='menu' role="contentinfo">
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Accesiblity</li>
                            <li>Address</li>
                            <li>Terms of Service</li>
                            <li>Terms of Sale</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2023 Little Lemon. All rights reserved.

                </div>

            </div>
        </footer>
    );
};

export default Footer;
