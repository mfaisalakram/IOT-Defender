import "./App.css";
import { Banner } from "./component/Banner/Banner";
import { Clients } from "./component/Clients/Clients";
import { Footer } from "./component/common/Footer/Footer";
import Header from "./component/common/Header/Header";
import { Featured } from "./component/Featured/Featured";
import { HowItWork } from "./component/HowItWork/HowItWork";

function App() {
  return (
    <div className="App">
      <Header />

      <Banner />
      <Clients />
      <Featured />
      <HowItWork />

      <Footer />
    </div>
  );
}

export default App;
