import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
// import { FullScreen, useFullScreenHandle } from "react-full-screen";
function openFullscreen() {
  document.getElementById("image1")?.requestFullscreen();
}

export default function collection(props) {
  return (
    <div className="type">
      <div className="collection" id="collection">
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptate dolores maiores doloremque quae eius consequatur ullam totam
        </p>
      </div>

      <div className="row1">
        <div className="column1">
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="1"
              id="image1"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="2"
              id="image2"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="3"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="4"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="5"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="6"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="29"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="7"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="8"
              id="image"
            />

            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="9"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="10"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1521133573892-e44906baee46?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="11"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="12"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1719672531841-5c2138601bc3?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="13"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="14"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="16"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="17"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="18"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="19"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1722353129214-df9638aab876?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="20"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="21"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1496483353456-90997957cf99?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="22"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="23"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://plus.unsplash.com/premium_photo-1663936756850-5288c3ad1593?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="25"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1466036692599-070d032f4711?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="26"
              id="image"
            />{" "}
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="27"
              id="image"
            />{" "}
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                className="icon "
                title="expand"
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
          <div className="container">
            <img
              src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="28"
              id="image"
            />
            <div className="overlay">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
                title="expand"
                className="icon "
                onClick={openFullscreen}

                // target="_blank"
              >
                <FontAwesomeIcon icon={faExpand} />
              </a>
              {/* <span className="close">&times;</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
collection.propTypes = { title: PropTypes.string.isRequired };
