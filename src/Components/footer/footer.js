<<<<<<< HEAD
import './footer.css';
import{AiFillLinkedin} from "react-icons/ai"
import{AiFillTwitterSquare} from "react-icons/ai"
import{FaGithubSquare} from "react-icons/fa"

function footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <a className='logo'> Mauro Tonetti</a>
                <ul className='menu'>
                    <li> <a href='#Home'>Home</a> </li>
                    <li> <a href='#Skills'>Skills</a> </li>
                    <li> <a href='#Projects'>Projects</a> </li>
                    <li> <a href='#contact'>Contact</a> </li>
                </ul>
                <ul className='socials'>
                    <li> <a href='http://www.linkedin.com/in/mauro-tonetti'> <AiFillLinkedin className='icon'/> </a> </li>
                    <li> <a href='http://twitter.com/MauroTonetti23'><AiFillTwitterSquare className='icon'/></a> </li>
                    <li> <a href='https://github.com/Mavroos'><FaGithubSquare className='icon'/></a> </li>
                </ul>

                <div className='line'/>
                <p className='copyright'>Copyright © 2023. Made by Mauro Tonetti</p>
                
            </div>
        </div>
    );
  }
  
=======
import './footer.css';
import{AiFillLinkedin} from "react-icons/ai"
import{AiFillTwitterSquare} from "react-icons/ai"
import{FaGithubSquare} from "react-icons/fa"

function footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <a className='logo'> Mauro Tonetti</a>
                <ul className='menu'>
                    <li> <a href='#Home'>Home</a> </li>
                    <li> <a href='#Skills'>Skills</a> </li>
                    <li> <a href='#Projects'>Projects</a> </li>
                    <li> <a href='#contact'>Contact</a> </li>
                </ul>
                <ul className='socials'>
                    <li> <a href='http://www.linkedin.com/in/mauro-tonetti'> <AiFillLinkedin className='icon'/> </a> </li>
                    <li> <a href='http://twitter.com/MauroTonetti23'><AiFillTwitterSquare className='icon'/></a> </li>
                    <li> <a href='https://github.com/Mavroos'><FaGithubSquare className='icon'/></a> </li>
                </ul>

                <div className='line'/>
                <p className='copyright'>Copyright © 2023. Made by Mauro Tonetti</p>
                
            </div>
        </div>
    );
  }
  
>>>>>>> bb2d0a04ce3473edcc3520ef13ae46eefad06df3
  export default footer;