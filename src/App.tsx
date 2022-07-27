import ContestItem from "./components/ContestItem";
import Cover from "./components/Cover";
import Timer from "./components/timer/Timer";
import TimerPad from "./components/timer/TimerPad";
import Button from "./components/ui/SolidButton";
import Checkbox from "./components/ui/Checkbox";
import PlanStep from "./components/ui/PlanStep";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";


function App() {
  return (
    <div className="App">
      <main>
        <Cover />
        <Subscription />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
