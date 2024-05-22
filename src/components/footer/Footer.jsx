import "./style.css";
import pizza from "../../assets/Logo.png";
import apple_logo from "../../assets/apple_logo.png";
import android_logo from "../../assets/android_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-logo">
          <img src={pizza} alt="logo" />
          <div className="download">
            <div className="download-apple">
              <div className="app-store-button">
                <img src={apple_logo} alt="Apple Logo" className="apple-logo" />
                <div className="text">
                  <div className="download">Download on the</div>
                  <div className="app-store">App Store</div>
                </div>
              </div>
            </div>
            <div className="download-android">
              <div className="app-store-button">
                <img
                  src={android_logo}
                  alt="Apple Logo"
                  className="apple-logo"
                />
                <div className="text">
                  <div className="download">Download on the</div>
                  <div className="app-store">App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <h4>Quick links</h4>
          <ul>
            <li>Feature</li>
            <li>Food Menu</li>
            <li>Offer</li>
            <li>Review</li>
            <li>Rider</li>
          </ul>
        </div>
        <div className="links">
          <h4>Get to Know Us</h4>
          <ul>
            <li>Gift Cards</li>
            <li>Location Travels</li>
            <li>LinkedIn</li>
            <li>Glassdoor</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="links">
          <h4>News</h4>
          <ul>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Lift Media</li>
            <li>Press</li>
            <li>Press kit</li>
          </ul>
        </div>
        <div className="links">
          <h4>Contact</h4>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
      <p>© {currentYear} Pizza. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy</span>
          <span>Policy</span>
          <span>Terms</span>
          <span>Services</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
