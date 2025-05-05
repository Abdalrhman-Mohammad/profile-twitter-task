import "./TwitterScreen.css";
import TabsSection from "../TabsSection/TabsSection";
import ContentSection from "../ContentSection/ContentSection";
import OtherSections from "../OthersSection/OthersSection";
function TwitterScreen() {
  return (
    <div className="main-container">
      <TabsSection />
      <ContentSection />
      <OtherSections />
    </div>
  );
}

export default TwitterScreen;
