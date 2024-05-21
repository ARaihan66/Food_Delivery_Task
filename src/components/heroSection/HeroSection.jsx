import "./style.css";
import apple_logo from "../../assets/apple_logo.png";
import android_logo from "../../assets/android_logo.png";

const HeroSection = () => {
  return (
    <div className="hero-main">
      <div className="hero-left">
        <div>
          <h3>Your Favorite Food Delivery Partner</h3>
          <p>
            The food at your doorstep. Why starve when you have us. You hunger
            partner. Straight out of the oven to your doorstep.
          </p>
        </div>
        <div className="delivery-section">
          <input type="text" placeholder="Enter your delivery location" />
          <button>Order Now</button>
        </div>
        <div className="app-download">
          <div className="apple">
           <div> <img src={apple_logo} alt="apple" /></div>
           <div>
            <p>Download on the</p>
            <h4>App Store</h4>
           </div>
          </div>
          <div className="android"> 
            <div>
            <img src={android_logo} alt="android" />
            </div>
          <div>
            <p>Download on the</p>
            <h4>App Store</h4>
           </div></div>
        </div>
      </div>
      <div className="hero-right">
        <img src="https://s3-alpha-sig.figma.com/img/0afb/6020/4facbc308fcee84e7051f4621a15b790?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBzDJF1rqMN07G6RU9PPPNn6za6nYUNZkPiVYUEGeKg4xLBDSESmIQT348YBWl72ul1vj0PObRHMtvItR9Mt-ftgYPObTlc6GliDGSTYDZRBizsaZzpWQ~9RhlBM4-FOktk5pecTS2h6T6izb0EXRiNE-iQNIdicsiG8UK5au7pG-0o5z1gYgF~XiuPjMzY5dgD4SAnbqUBQVqgKNswOLHT6xm-aP8TmO3JXMft6dchVxJTGbqx9OsWJucLktWpYudtXdfbkGVGqbK9oqOQ4mj8WCzL99BKEcSIeG5wCfGdHGMfyQBUVGslcnxI5zXbThRA3SgpczK~vGmkFZHbYJQ__" alt="delivery_man" />
      </div>
    </div>
  );
};

export default HeroSection;
