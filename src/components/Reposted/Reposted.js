import "./Reposted.css";
import ReactProfile from "../../assets/react-icon-profile-img.png";
import { useState } from "react";
import { BiRepost } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { PiUploadSimpleBold } from "react-icons/pi";

function Reposted() {
  let [checked, setChecked] = useState("Posts");
  return (
    <div>
      <div style={{ display: "flex", margin: "10px 10px" }}>
        <BiRepost size={20} style={{ color: "grey", margin: "0 10px" }} />{" "}
        <p style={{ color: "grey", margin: 0 }}>React Reposted</p>
      </div>
      <div style={{ display: "grid", justifyContent: "start" }}>
        <img
          src={ReactProfile}
          style={{
            width: 50,
            margin: "0 10px",
            borderRadius: 100,
            gridRow: "1/3",
          }}
        />
        <div style={{ gridRow: "1/2", display: "flex", margin: "5px 0 0 0" }}>
          <h4 style={{ margin: "0   5px 0 0" }}>React</h4>
          <p style={{ color: "grey", margin: 0 }}>@reactjs . May 29</p>
        </div>
        <div style={{ gridRow: "2/3", display: "flex" }}>
          <p style={{ margin: "0 5px 0 0" }}>Happy 10th birthday to</p>
          <p style={{ color: "blue", margin: 0 }}>@reactjs!</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            marginTop:10
          }}
        >
          <div style={{ display: "flex" }}>
            <FaRegMessage size={20} style={{ marginRight: 5, color: "grey" }} />{" "}
            <p style={{ margin: 0, color: "grey" }}>46</p>
          </div>
          <div style={{ display: "flex" }}>
            <BiRepost
              size={25}
              style={{ marginRight: 5, marginTop: "-4px", color: "grey" }}
            />
            <p style={{ margin: 0, color: "grey" }}>676</p>
          </div>
          <div style={{ display: "flex" }}>
            <FaRegHeart size={16} style={{ marginRight: 5, color: "grey" }} />
            <p style={{ margin: 0, color: "grey" }}>3071</p>
          </div>
          <div style={{ display: "flex" }}>
            <SiSimpleanalytics
              size={16}
              style={{ marginRight: 5, color: "grey" }}
            />{" "}
            <p style={{ margin: 0, color: "grey" }}>1.1M</p>
          </div>
        </div>
        <div>
          <PiUploadSimpleBold
            size={20}
            style={{ marginRight: 5, color: "grey" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Reposted;
