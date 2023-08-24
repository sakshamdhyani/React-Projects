import './Footer.scss'
import {BiLogoMediumOld} from 'react-icons/bi'
import {ImFacebook} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-parent'>
    
      <div className="footer">

          <div className="part1">

              <h4>
                <BiLogoMediumOld/>
                <span>Ou-Trips</span>
              </h4>

              <div className='icons'>
                <ImFacebook className='icon'/>
                <AiFillInstagram className='icon'/>
                <BsTwitter className='icon'/>
              </div>

          </div>

          <div className="part2">

            <h4>Helpful Links</h4>

          
              <li>Home</li>
              <li>Explore</li>
              <li>Travel</li>
              <li>Blog</li>
            

          </div>

          <div className="part3">

            <h4>Information</h4>

          
              <li>Destination</li>
              <li>Support</li>
              <li>Travel & Condition</li>
              <li>Privacy</li>
            

          </div>


          <div className="part4">

            <h4>Contact Details</h4>

          
              <li>+651 125 658</li>
              <li>moutravels@someting.com</li>
              
            

          </div>

          

      </div>
    </div>
  )
}

export default Footer