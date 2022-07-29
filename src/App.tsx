import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import About from "./components/About";
import ParticipationGoal from "./components/ParticipationGoal";
import Plan from "./components/Plan";
import Diploma from "./components/Diploma";
import Register from "./components/Register";
import Questions from "./components/Questions";


function App() {
  return (
    <div className="App">
      <main>
        <Cover />
        <About />
        <ParticipationGoal />
        <Plan />
        <Diploma />
        <Register />
        <Questions />
        <Subscription />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
