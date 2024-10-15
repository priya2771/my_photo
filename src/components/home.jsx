import React from "react";

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
          <img className="img-1" src="./assets/sample3.jpg" alt="1" />{" "}
        </div>
        <div className="column">
          <img className="img-2" src="./assets/sample1.jpg" alt="2" />
          <img className="img-3" src="./assets/sample5.jpg" alt="3" />
        </div>
        <div className="column">
          <img className="img-4" src="./assets/sample4.jpg" alt="4" />
          <img className="img-5" src="./assets/sample2.jpg" alt="5" />
        </div>
      </div>
    </div>
  );
}
