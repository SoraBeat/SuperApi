import React from "react";
import "./PageNotFound.scss";

import Image from "../../assets/images/PageNotFound.png";

const PageNotFound = () => {
  return (

      <div className="container-notfound">
        <img className="notfound-img" src={Image} alt="page not found" />
      </div>

  );
};

export default PageNotFound;
