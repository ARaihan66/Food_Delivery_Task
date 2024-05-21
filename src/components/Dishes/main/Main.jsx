import FoodItem from "../FoodItem/FoodItem"
import "./style.css"

const Main = () => {
  return (
    <div className='dishes-main'>
        <div className="dishes">
        <h3>MORE THAN <span>10,000</span> DISHES TO ORDER!</h3>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
        </div>
        <FoodItem/>
    </div>
  )
}

export default Main