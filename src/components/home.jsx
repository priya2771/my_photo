import React from "react";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";
import sample4 from "../assets/sample4.jpg";
import sample5 from "../assets/sample5.jpg";
export default function home() {
  return (
    <div id="home">
      <div className="info">
        <h1>Hello!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          amet quos reprehenderit provident enim neque corporis voluptate, sit
          earum magni, ducimus, iusto tenetur nihil veniam dolorum natus aperiam
          voluptatibus assumenda.
        </p>
      </div>
      <div className="row">
        <div className="column">
          <img className="img-1" src={sample3} alt="1" />
        </div>
        <div className="column">
          <img className="img-2" src={sample1} alt="2" />
          <img className="img-3" src={sample5} alt="3" />
        </div>
        <div className="column">
          <img className="img-4" src={sample4} alt="4" />
          <img className="img-5" src={sample2} alt="5" />
        </div>
      </div>
    </div>
  );
}
