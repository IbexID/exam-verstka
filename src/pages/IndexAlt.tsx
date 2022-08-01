import React from 'react'
import About from '../components/About'
import Cover from '../components/cover/Cover'
import Diploma from '../components/diploma/Diploma'
import Footer from '../components/footer/Footer'
import ParticipationGoal from '../components/participation-goal/ParticipationGoal'
import Plan from '../components/Plan'
import Questions from '../components/questions/Questions'
import Register from '../components/register/Register'
import Subscription from '../components/Subscription'

const IndexAlt: React.FC = () => {
  console.log('hi');
  
  return (
    <div
      className='App'
      onLoad={() => {
        document.body.dataset.theme = 'alternative'
      }}
    >
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
  )
}

export default IndexAlt
