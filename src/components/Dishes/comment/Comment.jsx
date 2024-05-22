import { useState } from "react";
import "./style.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const comments = [
  {
    name: "Alice",
    text: "First Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    name: "Bob",
    text: "Second Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    name: "Charlie",
    text: "Third Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    name: "Diana",
    text: "Fourth Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    name: "Eve",
    text: "Fifth Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
];

const Comment = () => {
  const [current, setCurrent] = useState(0);

  const nextComment = () => {
    setCurrent(current === comments.length - 1 ? 0 : current + 1);
  };

  const prevComment = () => {
    setCurrent(current === 0 ? comments.length - 1 : current - 1);
  };

  return (
    <div className="main">
      <div className="client-feedback">
        <h2>Our Clients Feedback</h2>
        <p>
          The food at your doorstep. Why starve when you have us. Your hunger
          partner. Straight out of the oven to your doorstep.
        </p>
      </div>
      <div className="quote-container">
        <RiDoubleQuotesL className="quote" />
      </div>
      <div className="slider">
        <div className="comment">
          <p>{comments[current].text}</p>
          <p>
            <strong>- {comments[current].name}</strong>
          </p>
        </div>
        <div className="button-container">
          <button onClick={prevComment} className="nav-button">
            <MdKeyboardArrowLeft className="button-symbol" />
          </button>
          <button onClick={nextComment} className="nav-button">
            <MdKeyboardArrowRight className="button-symbol" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
