
import "./Home.scss"

import Video from '../../Assets/video.mp4'
import {AiOutlineSwapRight} from 'react-icons/ai'

import popular1 from '../../Assets/popular1.jpg'
import popular2 from '../../Assets/popular2.jpg'
import popular3 from '../../Assets/popular3.jpg'
import popular4 from '../../Assets/popular4.jpg'

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>
          Discover the worlds most adventurous nature,
          life is short for a trip.
        </p>

        <button className='btn'>GET STARTED <AiOutlineSwapRight className='icon'/> </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
            <h3>Popular Places</h3>
            <div className="images flex">
              <img src={popular1} alt="" />
              <img src={popular2} alt="" />
              <img src={popular3} alt="" />
              <img src={popular4} alt="" />
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home