import React from "react";
import "./NotificationStyle.css";
import Notices from "../../components/Notice/Notice";
import LatestUpdates from "../../components/LatestUpadates/LatestUpadates";

const Notification = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="main_page">
      
      <p>Current Date: {currentDate}</p>
      <div className="content">
        <div className="notice">
          <Notices />
        </div>
        <div className="latestupdate">
          <LatestUpdates />
        </div>
      </div>
    </div>
  );
};

export default Notification;
