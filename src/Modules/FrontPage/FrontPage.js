import React from "react";
import "./FrontPage.scss";
import Trending from "../../Components/Trending/Trending";
import LoginPrompt from "../../Components/LoginPrompt/LoginPrompt";
const FrontPage = () => {
  return (
    <>
      <div className="parent">
        <div className="first"></div>
        <div className="second"></div>
        <Trending />
        <LoginPrompt />
      </div>
    </>
  );
};
export default FrontPage;
