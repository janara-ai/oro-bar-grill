import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h2 className="app__header-h2">The Masters Of Steak</h2>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        From our carefully aged steaks, grilled to perfection, to our spare ribs
        that literally fall off the bone, The ORO BAR & GRILL has gained respect
        of meat-lovers all over the country.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img
        src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="header_img"
      />
    </div>
  </div>
);

export default Header;
