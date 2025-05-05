import "./Tab.css";

function Tab({ icon, title, checked,setChecked }) {
  return (
    <div className="spicific-tab-container" onClick={() => setChecked(title)}>
      <div className="tab-icon">{icon}</div>
      {/* {icon} */}
      <h3 className={checked==title ? "tabs-title-checked" : "tabs-title-not-checked"}>
        {title}
      </h3>
    </div>
  );
}

export default Tab;
