import "./TabsSection.css";
import Tab from "../Tab/Tab.js";
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoSearchOutline, IoSearchSharp } from "react-icons/io5";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { RiFileListFill, RiFileListLine } from "react-icons/ri";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { BsFillPeopleFill, BsPeople } from "react-icons/bs";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import {useState} from "react";
function TabsSection() {
  let [checked, setChecked] = useState("Home");

  let tabsInfo = [
    {
      id: 1,
      icon: {
        checked: <GoHomeFill size={28} />,
        notChecked: <GoHome size={28} />,
      },
      title: "Home",
    },
    {
      id: 2,
      icon: {
        checked: <IoSearchSharp size={28}/>,
        notChecked: <IoSearchOutline size={28}/>,
      },
      title: "Explore",
    },
    {
      id: 3,
      icon: {
        checked: <IoNotificationsSharp size={28}/>,
        notChecked: <IoNotificationsOutline size={28}/>,
      },
      title: "Notifications",
    },
    {
      id: 4,
      icon: { checked: <MdEmail size={28}/>, notChecked: <MdOutlineEmail size={28}/> },
      title: "Messages",
    },
    {
      id: 6,
      icon: { checked: <RiFileListFill size={28}/>, notChecked: <RiFileListLine size={28}/> },
      title: "Lists",
    },
    {
      id: 7,
      icon: { checked: <FaBookmark size={28}/>, notChecked: <FaRegBookmark size={28}/> },
      title: "Bookmarks",
    },
    {
      id: 8,
      icon: { checked: <BsFillPeopleFill size={28}/>, notChecked: <BsPeople size={28}/> },
      title: "Communities",
    },
    {
      id: 9,
      icon: { checked: <IoPerson size={28}/>, notChecked: <IoPersonOutline size={28}/> },
      title: "Profile",
    },
    {
      id: 10,
      icon: { checked: <CiCircleMore size={28}/>, notChecked: <CiCircleMore size={28}/> },
      title: "More",
    },
  ];
console.log(tabsInfo[0].icon.checked)
  let tabs = tabsInfo.map((item) => (
    <Tab
      key={item.id}
      icon={checked == item.title ? item.icon.checked : item.icon.notChecked}
      title={item.title}
      checked={checked}
      setChecked={setChecked}
    />
  ));
  return (
    <div className="tabs-container">
      <img src="/X_logo.png" alt="x logo" width={50} style={{paddingLeft:20}}/>
      {tabs}
    </div>
  );
}

export default TabsSection;
