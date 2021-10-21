import '../index.css';
import Section from '../components/Section.js'
import ContentBox from '../components/ContentBox.js'
// 画像ファイルのimport
import Twitter from '../images/Twitter.png'
import Instagram from '../images/Instagram.png'
import Github from '../images/Github.png'
import Soundcloud from '../images/Soundcloud.png'
import Spotify from '../images/Spotify.png'


const AboutText = () => {
  return (
    <div>
      <h3>- Welcome to my web portfolio!</h3>
       <p>Blief introduction of myself here!</p>
      <h3>- Info</h3>
        <p>[hundle] OD</p>
        <p>[age] 19</p>
        <p>[born] 2001, Yokohama Kanagawa</p>
        <p>[what I do] University Student, DJ (sometimes)</p>
        <p>[things I like] Music (listening, making & DJing) / Movies / Coffee</p>
    </div>
  );
}

const Social = () => {
  return (
    <div className="social-group">
      <a href="https://twitter.com/OD___15" target="_blank">
        <img src={Twitter} className="social-image" />
      </a>
      <a href="https://www.instagram.com/od___15/?hl=ja" target="_blank">
        <img src={Instagram} className="social-image" />
      </a>
      <a href="https://github.com/T0-0D" target="_blank">
        <img src={Github} className="social-image" />
        </a>      
      <a href="https://soundcloud.com/user-967701471" target="_blank">
        <img src={Soundcloud} className="social-image" />
      </a>      
      <a href="https://open.spotify.com/user/olg5o8jgpkp8rns2upoq0gn6m?si=f913a86cc5d64448" target="_blank">
        <img src={Spotify} className="social-image" />
      </a>
    </div>
  );
}


function About() {
  return (
    <div className="contents">
      <Section name="About"/>
      <ContentBox>
        <AboutText />
      </ContentBox>
      <ContentBox className="social-box">
        <Social />
      </ContentBox>
    </div>
    );
}
export default About;