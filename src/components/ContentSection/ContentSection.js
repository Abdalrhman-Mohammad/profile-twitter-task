import "./ContentSection.css";
import InnerTabs from "../InnerTabs/InnerTabs.js";
import Reposted from "../Reposted/Reposted.js";
import SuggestedUser from "../SuggestedUser/SuggestedUser.js";
import { IoArrowBack } from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { PiLinkSimpleLight } from "react-icons/pi";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import reactIconBackground from "../../assets/react-icon-background.jpeg";
import reactIconProfileImg from "../../assets/react-icon-profile-img.png";
import freecodecapm from "../../assets/freecodecamp.jpg";
import typeScript from "../../assets/typeScript.png";
import tailwindcss from "../../assets/tailwindcss.jpg";
function ContentSection() {
  return (
    <div className="content-container">
      <div style={{ display: "flex" }}>
        <IoArrowBack />
        <div>
          <h4>React</h4>
          <p>2,611 posts</p>
        </div>
      </div>
      <img src={reactIconBackground} style={{ width: "100%" }} />
      <div>
        <div style={{ display: "flex" }}>
          <img
            src={reactIconProfileImg}
            style={{
              width: "9%",
              borderRadius: 100,
              border: "5px solid black",
              translate: "20px -70px",
              position: "absolute",
            }}
          />
          <div
            style={{
              paddingTop: 10,
              display: "flex",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <IoIosMore
              size={20}
              style={{
                margin: 5,
                padding: 5,
                borderRadius: 100,
                border: "1.5px solid white",
              }}
            />
            <MdNotificationAdd
              size={20}
              style={{
                margin: 5,
                padding: 5,
                borderRadius: 100,
                border: "1.5px solid white",
              }}
            />
            <div
              style={{
                margin: 5,
                padding: "5px 12px",
                borderRadius: 100,
                border: "1.5px solid white",
                height: "20px",
              }}
            >
              <p style={{ fontSize: 15, margin: 1 }}>Following</p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "3%", margin: "6% auto" }}>
          <img />
          <h4 style={{ margin: "3px auto", fontSize: 22 }}>React</h4>
          <p style={{ margin: "3px auto", fontSize: 13, color: "grey" }}>
            @reactjs
          </p>
          <p>The library for web and native use interfaces</p>
          <div
            style={{
              display: "flex",
              width: "35%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <PiLinkSimpleLight style={{ color: "grey", marginRight: 5 }} />
              <a
                href="https://react.dev/"
                style={{ textDecoration: "0", color: "#1D9BF0" }}
              >
                react.dev
              </a>
            </div>
            <div style={{ display: "flex" }}>
              <HiMiniCalendarDateRange
                style={{ color: "grey", marginRight: 5 }}
              />
              <p style={{ color: "grey", margin: 0 }}>Joined July 2013</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "35%",
              justifyContent: "space-between",
            }}
          >
            <p>254 Following </p>
            <p>809.1K Followers </p>
          </div>

          <p style={{ color: "grey", margin: 0 }}>
            Not followed by anyone you're following
          </p>
        </div>
      </div>
      <div>
        <InnerTabs />
      </div>
      <Reposted />
      <h3>Who to follow</h3>
      <SuggestedUser
        imgSrc={freecodecapm}
        userName="freeCodeCamp.org"
        handle="freeCodeCamp"
        description="We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by "
      />
      <SuggestedUser
        imgSrc={typeScript}
        userName="TypeScript"
        handle="typeScript"
        description="TS 
@typescript 
Follow 
TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript. "
      />
      <SuggestedUser
        imgSrc={tailwindcss}
        userName="Tailwind Css"
        handle="tailwindcss"
        description="The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML. "
      />
      <p style={{ textDecoration: "0", color: "#1D9BF0" }}>Show more</p>
    </div>
  );
}

export default ContentSection;
