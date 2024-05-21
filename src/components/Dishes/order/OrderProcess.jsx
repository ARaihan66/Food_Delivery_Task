import "./style.css";
import pizza from "../../../assets/Logo.png";

const OrderProcess = () => {
  return (
    <div className="main">
      <h1 className="question">How To Order?</h1>
      <div className="order-process">
        <div className="order">
          <h1 className="number">01</h1>
          <div className="process-container">
            <div className="process-image">
              <img src={pizza} alt="" />
            </div>
            <p>Choose your location</p>
          </div>
        </div>
        <div className="order">
          <h1 className="number">02</h1>
          <div className="process-container">
            <div className="process-image">
              <img src={pizza} alt="" />
            </div>
            <p>Choose what to eat</p>
          </div>
        </div>
        <div className="order">
          <h1 className="number">03</h1>
          <div className="process-container">
            <div className="process-image">
              <img src={pizza} alt="" />
            </div>
            <p>May your first order</p>
          </div>
        </div>
        <div className="order">
          <h1 className="number">04</h1>
          <div className="process-container">
            <div className="process-image">
              <img src={pizza} alt="" />
            </div>
            <p>Now! Your food in way</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
