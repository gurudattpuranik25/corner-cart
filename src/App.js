import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="relative">
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
