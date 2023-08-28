import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useEffect
import LoginModal from "./login/LoginModal";
import { Button } from "react-bootstrap";
import searchIcon from "../assets/search-icon.svg";
import logoutIcon from "../assets/logout.svg";
import loginIcon from "../assets/login.svg";

const MyHeader = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token"); // Get token from local storage
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    // Update isLoggedIn state based on token presence
    setIsLoggedIn(token !== null);
  }, [token]);

  const headerStyle = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
    margin: "auto",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container-fluid"
          style={{
            width: "100%",
            height: "54.742px",
            flex: "auto",
          }}
        >
          <Link className="navbar-brand" style={headerStyle} to="/">
            Good Place
          </Link>
          <div className="search" style={{ marginLeft: "105px" }}>
            <input className="input_search" placeholder="검색어 입력" />
            <button className="search_btn">
              <img className="search_img" src={searchIcon} alt={"search"} />
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item" style={headerStyle}>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={headerStyle}>
                <Link className="nav-link story" to="/story">
                  Story
                </Link>
              </li>
              <li className="nav-item" style={headerStyle}>
                <Link className="nav-link list" to="/list">
                  List
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item" style={headerStyle}>
                    <Link className="nav-link list" to={`/recommend/${userId}`}>
                      {" "}
                      {/* Use userId in the link */}
                      Recommend
                    </Link>
                  </li>
                  <li className="nav-item userbtn" style={headerStyle}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link user">
                      {/* Logged in button */}
                      <Button
                        className="login_btn"
                        variant="primary"
                        onClick={() => setModalShow(true)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        <img src={logoutIcon} />
                      </Button>
                      <LoginModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </a>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <li className="nav-item userbtn" style={headerStyle}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="nav-link user">
                    {/* Not logged in button */}
                    <Button
                      className="login_btn"
                      variant="primary"
                      onClick={() => setModalShow(true)}
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <img src={loginIcon} alt={"button"} />
                    </Button>
                    <LoginModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyHeader;
