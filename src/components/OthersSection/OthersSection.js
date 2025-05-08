import "./OthersSection.css";
import { IoSearchOutline, IoSearchSharp } from "react-icons/io5";
import SuggestedUser from "../SuggestedUser/SuggestedUser.js";
import Trend from "../Trend/Trend.js";
import freecodecapm from "../../assets/freecodecamp.jpg";
import typeScript from "../../assets/typeScript.png";
import tailwindcss from "../../assets/tailwindcss.jpg";
function OthersSection() {
  return (
    <div className="others-container">
      <div
        style={{
          height: "3%",
          margin: 20,
          marginTop: 3,
          marginBottom: 10,
          backgroundColor: "#FFFFFF22",
          borderRadius: 20,
          width: "100%",
          border: "none",
          color: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <IoSearchOutline style={{ padding: 10 }} /> Search
      </div>
      <div
        style={{
          height: "24%",
          margin: 20,
          marginBottom: 10,
          backgroundColor: "#FFFFFF22",
          borderRadius: 20,
          width: "100%",
          padding: 10,
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            marginTop: 10,
            paddingLeft: "5%",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          You might like
        </p>
        <SuggestedUser
          imgSrc={freecodecapm}
          userName="freeCodeCamp.org"
          handle="freeCodeCamp"
          Top={false}
        />
        <SuggestedUser
          imgSrc={typeScript}
          userName="TypeScript"
          handle="typeScript"
          Top={false}
        />
        <SuggestedUser
          imgSrc={tailwindcss}
          userName="Tailwind Css"
          handle="tailwindcss"
          Top={false}
        />
        <p style={{ textDecoration: "0", color: "#1D9BF0", paddingLeft: 10 }}>
          Show more
        </p>
      </div>
      <div
        style={{
          height: "66%",
          margin: 20,
          marginBottom: 10,
          backgroundColor: "#FFFFFF22",
          borderRadius: 20,
          width: "100%",
          padding: 10,
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            marginTop: 10,
            paddingLeft: "5%",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Trends for you
        </p>
        <Trend Name="#VALORANTChampions" Posts="27.8" />
        <Trend Name="الانستا" Posts="1415" />
        <Trend Name="Mako" Posts="54.1" />
        <Trend Name="#janem" Posts="27.9" />
        <Trend Name="#janem" Posts="27.9" />
        <Trend Name="#janem" Posts="27.9" />
        <Trend Name="#janem" Posts="27.9" />
        <Trend Name="#janem" Posts="27.9" />
        <Trend Name="#janem" Posts="27.9" />
        <Trend Name="#janem" Posts="27.9" />
        <Trend Name="#janem" Posts="27.9" />
        <p style={{ textDecoration: "0", color: "#1D9BF0", paddingLeft: 10 }}>
          Show more
        </p>
      </div>
    </div>
  );
}

export default OthersSection;
