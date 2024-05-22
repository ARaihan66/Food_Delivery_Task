import "./style.css"

const NewsLetter = () => {
  return (
    <div className="newsletter-main">
        <div className="newsletter-text">
            <h1>Subscribe our newsletter</h1>
            <p>Browse local restaurants and businesses for delivery by entering your address blow.</p>
        </div>
        <div className="newsletter-input">
            <input type="text" placeholder="Enter your email address..."/>
            <button>Send</button>
        </div>
    </div>
  )
}

export default NewsLetter