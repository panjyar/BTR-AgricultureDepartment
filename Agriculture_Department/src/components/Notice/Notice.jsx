import React from "react";
import { notices } from "../../constants/NoticeData.jsx";
import "./NoticesStyle.css";
import Images from "../../constants/Images.jsx";

const Notices = () => {
  return (
    <div className="notices">
      <div className="notice_heading">
        <h2>Notices</h2>
        <hr />
      </div>
      <div className="notice_title">
        <ul>
          {notices.map((notice, index) => (
            <div className="notice_name">
              <li key={index}>
                <img
                  className="new_gif"
                  src={Images.noticegif}
                  alt="new arrow"
                />
                <a href={notice.file} target="_blank" rel="noopener noreferrer">
                  {notice.title}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notices;
