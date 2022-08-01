import React from 'react';
import About from '../components/About';
import Cover from '../components/Cover';
import Diploma from '../components/Diploma';
import Footer from '../components/Footer';
import ParticipationGoal from '../components/ParticipationGoal';
import Plan from '../components/Plan';
import Questions from '../components/Questions';
import Register from '../components/Register';
import Subscription from '../components/Subscription';

const IndexAlt: React.FC = () => {
    return (
        <div className="App" onLoad={()=>{
          document.body.dataset.theme = 'alternative'
      }}>
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
};

export default IndexAlt;