import { Banner } from "./component/Banner/Banner";
import { Clients } from "./component/Clients/Clients";
import { Footer } from "./component/common/Footer/Footer";
import Header from "./component/common/Header/Header";
import { Faq } from "./component/Faq/Faq";
import { Featured } from "./component/Featured/Featured";
import { GetInTouch } from "./component/GetInTouch/GetInTouch";
import { HowItWork } from "./component/HowItWork/HowItWork";
import { MembershipPlan } from "./component/MembershipPlan/MembershipPlan";
import { OurFeatures } from "./component/OurFeatures/OurFeatures";

import "./App.css";
import { useEffect, useState } from "react";
import SplashScreen from "./component/SplashScreen/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Banner />
          <Clients />
          <Featured />
          <HowItWork />
          <OurFeatures />
          {/* <MembershipPlan /> */}
          <Faq />
          <GetInTouch />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
