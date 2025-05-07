import "./SuggestedUser.css";
import ReactProfile from "../../assets/react-icon-profile-img.png";
import { useState } from "react";
import { BiRepost } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { PiUploadSimpleBold } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";

function SuggestedUser({ userName, handle, description, imgSrc }) {
  let [checked, setChecked] = useState("Posts");
  return (
    <div>
      <div style={{ display: "flex", margin: "10px 10px 5px 25px" }}>
        <IoMdPerson size={20} style={{ color: "grey", margin: "0 10px" }} />{" "}
        <p style={{ color: "grey", margin: 0 }}>Node.js and 5 other follow</p>
      </div>
      <div style={{ display: "grid", justifyContent: "start" }}>
        <img
          src={imgSrc}
          style={{
            width: 50,
            margin: "0 10px",
            borderRadius: 100,
            gridRow: "1/3",
          }}
        />
        <div style={{ gridRow: "1/2", margin: "5px 0 10px 0" }}>
          <h4 style={{ margin: "0   5px 5px 0" }}>{userName}</h4>
          <p style={{ color: "grey", margin: 0 }}>@{handle}</p>
        </div>
        <div style={{ gridRow: "2/3", display: "flex" }}>
          <p style={{ margin: "0 5px 0 0" }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SuggestedUser;
