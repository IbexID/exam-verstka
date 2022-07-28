import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import About from "./components/About";
import ParticipationGoal from "./components/ParticipationGoal";
import Plan from "./components/Plan";


function App() {
  return (
    <div className="App">
      <main>
        <Cover />
        <About />
        <ParticipationGoal />
        <Plan />
        <Subscription />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
