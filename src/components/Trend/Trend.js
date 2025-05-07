import "./Trend.css";
import ReactProfile from "../../assets/react-icon-profile-img.png";
import { useState } from "react";
import { BiRepost } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { PiUploadSimpleBold } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

function Trend({ Name, Posts = "" }) {
  return (
    <div
      style={{
        margin: "10px 10px 5px 25px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "white", margin: 0,fontSize:20,fontWeight:500 }}>{Name}</p>
        <IoIosMore size={20} style={{ color: "grey", margin: "0 10px" }} />
      </div>
      {Posts.length != 0 && <p style={{ color: "grey" ,fontSize:15}}>{Posts}K posts</p>}
    </div>
  );
}

export default Trend;
