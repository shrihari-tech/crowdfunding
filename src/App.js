// import './App.css';
import { Navbar } from "./Components";
import { CrowdFundingprovider } from "./Context/CrowdFunding";
function App() {
  return (
    <div className="App">
      <CrowdFundingprovider>
      <Navbar/>
      </CrowdFundingprovider>
    </div>
  );
}

export default App;
