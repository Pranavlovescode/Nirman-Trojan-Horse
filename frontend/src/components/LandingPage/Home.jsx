import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BannerBackground from "../../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLoginClick = () => {
    navigate("/loginn"); // Navigate to the /login route when button is clicked
  };

  return (
    <>
      <div className="text-[#f9960e] font-mono text-5xl font-bold z-10 mt-10 ml-5"> Nirman Gati</div> 
      <div className="home-container mt-[-40px] ml-11">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">Streamline Your Business</h1>
            <p className="primary-text">
              Track demand trends, and optimize production schedules. Manage
              your operations efficiently, all from one intuitive dashboard.
              {/* <hr /> */}
            </p>
            {/* <h3>Login as Manufacturer</h3> <br /> */}
            <button onClick={handleLoginClick} className="secondary-button">
              Login Now <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img
              className="chair"
              src="https://plus.unsplash.com/premium_photo-1682146920372-bd950e25125d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
