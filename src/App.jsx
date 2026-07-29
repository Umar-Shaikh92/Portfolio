import Navbar from "./components/Navbar";
import FixedCard from "./components/FixedCard";
import Page from "./Page/Page";

function App() {
  return (
    <div className="min-h-screen">
      <FixedCard />
      <div
        id="scroll-container"
        className="ml-[28%] h-screen overflow-y-auto no-scrollbar"
      >
        <Navbar />
        <Page />
      </div>
    </div>
  );
}

export default App;
