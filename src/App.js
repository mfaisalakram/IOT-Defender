import "./App.css";
import { Banner } from "./component/Banner/Banner";
import { Clients } from "./component/Clients/Clients";
import { Footer } from "./component/common/Footer/Footer";
import Header from "./component/common/Header/Header";
import { Featured } from "./component/Featured/Featured";
import { GetInTouch } from "./component/GetInTouch/GetInTouch";
import { HowItWork } from "./component/HowItWork/HowItWork";
import { MembershipPlan } from "./component/MembershipPlan/MembershipPlan";
import { OurFeatures } from "./component/OurFeatures/OurFeatures";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Clients />
      <Featured />
      <HowItWork />
      <OurFeatures />
      <MembershipPlan />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
