import './index.css';
import Section from './components/Section.js'
import ContentBox from './components/ContentBox.js'
// 画像ファイルのimport
import Profile from './images/profile.jpg'
import Twitter from './images/Twitter.png'
import Instagram from './images/Instagram.png'
import Github from './images/Github.png'
import Soundcloud from './images/Soundcloud.png'
import Spotify from './images/Spotify.png'


const About = () => {
  return (
    <div>
      <div className="block-l">
        <img src={Profile} className="profile-image"/>
        <p>OD / T. Odaira</p>
      </div>
      <div className="block-r">
        <h3>Info</h3>
        <p>[hundle] OD</p>
        <p>[age] 20</p>
        <p>[born] in 2001 / in Yokohama City, Kanagawa</p>
        <p>[who am I] CS student at The Univ. of Aizu / DJ / Music Creator</p>
        <p>[things I like] Music / Watching movies / Coffee / Cozy things</p>
      </div>
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
      <a href="https://soundcloud.com/music-skynap" target="_blank">
        <img src={Soundcloud} className="social-image" />
      </a>      
      <a href="https://open.spotify.com/user/olg5o8jgpkp8rns2upoq0gn6m?si=f913a86cc5d64448" target="_blank">
        <img src={Spotify} className="social-image" />
      </a>
    </div>
  );
}


function Home() {
  return (
    <div className="contents">
      <Section name="About"/>
      <ContentBox>
        <About />
      </ContentBox>
      <Section name="Social"/>
      <ContentBox className="social-box">
        <Social />
      </ContentBox>
    </div>
    );
}
export default Home;
