import "./InnerTabs.css";
import { useState } from "react";
function InnerTabs() {
  let [checked, setChecked] = useState("Posts");
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={checked == "Posts" ? {} : { color: "grey" }}>
        <p>Posts</p>
        {checked == "Posts" && (
          <div
            style={{ height: 5, borderRadius: 10, backgroundColor: "#1D9BF0" }}
          ></div>
        )}
      </div>
      <div>
        <p style={checked == "Replies" ? {} : { color: "grey" }}>Replies</p>
        {checked == "Replies" && (
          <div
            style={{ height: 5, borderRadius: 10, backgroundColor: "#1D9BF0" }}
          ></div>
        )}{" "}
      </div>
      <div>
        <p style={checked == "Media" ? {} : { color: "grey" }}>Media</p>
        {checked == "Media" && (
          <div
            style={{ height: 5, borderRadius: 10, backgroundColor: "#1D9BF0" }}
          ></div>
        )}{" "}
      </div>
      <div>
        <p style={checked == "Likes" ? {} : { color: "grey" }}>Likes</p>
        {checked == "Likes" && (
          <div
            style={{ height: 5, borderRadius: 10, backgroundColor: "#1D9BF0" }}
          ></div>
        )}{" "}
      </div>
    </div>
  );
}

export default InnerTabs;
