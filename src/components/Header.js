import React from "react";

const header = () => {
  return (
    <header role="banner">
      <div className="title">React simple UI</div>
      <nav>
        <ul>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <span className="profile">
              Username
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="image"
              ></img>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
