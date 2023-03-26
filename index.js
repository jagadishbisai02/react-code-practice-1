const element = (
  //   Write your code here.
  <div className="ipl-container">
  <h1 className="heading">Super Over League</h1>
    <div className="image-container">
      <img className="ipl-images"
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        alt="royal challanges"
      />
      <img className="ipl-images"
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        alt="super king"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
