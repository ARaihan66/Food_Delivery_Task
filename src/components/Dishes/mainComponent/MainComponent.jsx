import Comment from "../comment/Comment";
import FoodItem from "../foodItem/FoodItem";
import OrderProcess from "../order/OrderProcess";
import "./style.css";

const MainComponent = () => {
  return (
    <div className="dishes-main">
      <div className="dishes">
        <h3>
          MORE THAN <span>10,000</span> DISHES TO ORDER!
        </h3>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
      </div>
     <FoodItem/>
      <OrderProcess />
      <Comment />
    </div>
  );
};

export default MainComponent;
