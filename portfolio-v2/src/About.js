import './index.css';
import Section from './components/Section.js'
import ContentBox from './components/ContentBox.js'
// 画像ファイルのimport
import Twitter from './images/twitter.png'
import Instagram from './images/instagram.png'
import Github from './images/github.png'
import Soundcloud from './images/soundcloud.png'

const AboutText = () => {
  return (
    <div>
      <h3>Welcome to my web portfolio!</h3>
      aaa
    </div>
  );
}

const Social = () => {
  return (
    <div className="social-group">
      <ul>
        <li>
          <a href=""
          className="social-item">
            <img src={Twitter} className="social-image" />
          </a>
        </li>
        <li>
          <a href=""
          className="social-item">
            <img src={Instagram} className="social-image" />
          </a>
        </li>
        <li>
          <a href=""
          className="social-item">
            <img src={Github} className="social-image" />
          </a>
        </li>
        <li>
          <a href=""
          className="social-item">
            <img src={Soundcloud} className="social-image" />
          </a>
      </li>
      </ul>
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