import "./style.css";
import pizza from "../../../assets/Logo.png";
import bike from "../../../assets/bike.png";
import { RiDoubleQuotesR } from "react-icons/ri";

const FoodItem = () => {
  return (
    <div className="main">
      <div className="main-top">
        <div className="food-container">
          <div className="food">
            <div className="food-image">
              <img src={pizza} alt="" />
            </div>
            <h5>Pizza</h5>
          </div>
          <div className="food">
            <div className="food-image">
              <img src={pizza} alt="" />
            </div>
            <h5>Burger</h5>
          </div>
          <div className="food">
            <div className="food-image">
              <img src={pizza} alt="" />
            </div>
            <h5>Shusi</h5>
          </div>
        </div>
        <div className="food-text">
          <p>
            Find<span>deals</span>, <span>free delivery</span>, and more from
            our restaurant partners.
          </p>
          <img src={bike} alt="bike" />
        </div>
      </div>
      <div className="main-bottom">
        <div className="bottom-quote">
          <RiDoubleQuotesR className="quote" />
          <p className="bottom-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
        <div className="food">
          <div className="food-image">
            <img src={pizza} alt="" />
          </div>
          <h5>Pasta</h5>
        </div>
        <div className="food">
          <div className="food-image">
            <img src={pizza} alt="" />
          </div>
          <h5>Salad</h5>
        </div>
        <div className="food">
          <div className="food-image">
            <img src={pizza} alt="" />
          </div>
          <h5>Desserts</h5>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
