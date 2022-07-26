import ContestItem from "./components/ContestItem";
import Timer from "./components/timer/Timer";
import TimerPad from "./components/timer/TimerPad";
import Button from "./components/ui/Button";
import Checkbox from "./components/ui/Checkbox";
import PlanStep from "./components/ui/PlanStep";


function App() {
  const countdownDate = new Date('08-04-2022');
  
  
  return (
    <div className="App">
      <Timer date={countdownDate}/>
    </div>
  );
}

export default App;
