import React from "react";
import { updates } from "../../constants/NoticeData.jsx";
import "../Notice/NoticesStyle.css";
import Images from "../../constants/Images.jsx";

const LatestUpdates = () => {
  return (
    <div className="notices">
      <div className="notice_heading">
        <h2>Latest Updates</h2>
        <hr />
      </div>
      <div className="notice_title">
        <ul>
          {updates.map((updates, index) => (
            <div className="notice_name">
              <li key={index}>
                <img
                  className="new_gif"
                  src={Images.arrowgif}
                  alt="new arrow"
                />
                <a
                  href={updates.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  {updates.title}
                </a>
                <br />
                <i class="fa-regular fa-calendar"></i>
                {updates.date}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestUpdates;
