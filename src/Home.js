import './Home.css';
import Section from './components/Section';
// 画像のインポート
import profile from './images/Profile.jpg'
import instagram from './images/Instagram.png'
import twitter from './images/Twitter.png'
import soundcloud from './images/Soundcloud.png'
import spotify from './images/Spotify.png'
import github from './images/Github.png'


function About() {

    return (
        <div>
            <Section title="About">
                <div id='about' className='sectionContents'>
                    <div className='blcok-left'>
                        <img
                            src={profile}
                            alt="Profile photo"
                            id='img-profile'
                        />
                    </div>

                    <div className='blcok-center'>
                        <p className='content-left'>Name</p>
                        <p className='content-left'>Handle</p>
                        <p className='content-left'>Birth Year</p>
                        <p className='content-left'>Hometown</p>
                        <p className='content-left'>Occupation</p>
                        <p className='content-left'>Education</p>
                        <p className='content-left'>Things I Like</p>
                        <p className='content-left'>Hobby</p>
                    </div>

                    <div className='block-right'>
                        <p className='content-right'>Takuto Odaira</p>
                        <p className='content-right'>OD</p>
                        <p className='content-right'>2001</p>
                        <p className='content-right'>Kanagawa Pref.</p>
                        <p className='content-right'>Student</p>
                        <p className='content-right'>University of Aizu / Computer Science</p>
                        <p className='content-right'>Music / Movie / Cofee</p>
                        <p className='content-right'>DJ / Music Producing / Programning</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}


function History() {
    const LinkedText = (props) => {
        return (
            <a href={props.link}
                className='linkedText'
                target='_blank'
            >
                {props.name}
            </a>
        );
    }

    return (
        <div>
            <Section title="History / Experience">
                <div className='sectionContents'>
                    <div className='history-left'>
                        <p className='content-left'>- 2020年3月</p>
                        <p className='content-left'>2020年4月 - Now</p>
                        <p className='content-left'>2021年4月 - Now</p>
                        <p className='content-left'>2021年12月 - Now</p>
                    </div>
                    <div className='history-right'>
                        <p className='content-right'>横浜市立高校</p>
                        <p className='content-right'>
                            <LinkedText link='https://www.u-aizu.ac.jp/' name='会津大学 コンピュータ理工学部 コンピュータ理工学科' />
                        </p>
                        <p className='content-right'>
                            <LinkedText link='https://www.u-aizu.ac.jp/osip/abroad/gl.html' name='会津大学 Global Lounge' />
                            &nbsp; - Student Assistant
                        </p>
                        <p className='content-right'>
                            <LinkedText link='https://www.nowhere.co.jp/#' name='株式会社 Eyes, Japan' />
                            &nbsp;- アルバイト
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}


function Skills() {

    return (
        <div>
            <Section title="Skills & Interests">
                <div id='skills' className='sectionContents'>
                    <div className='skills-left'>
                        <h3>Technology</h3>
                        <p>Javascript (React.js / Node.js / GAS)</p>
                        <p>Firebase</p>
                        <p>HTML / CSS</p>
                        <p>Shell / CLI</p>
                        <p>Git / GitHub</p>
                    </div>
                    <div className='skills-left'>
                        <h3>Other</h3>
                        <p>TOEIC L&R: <span className='textBold'>800</span>（2021年7月）</p>
                        <p>TOEIC Speaking: <span className='textBold'>130</span>（2021年3月）</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}


function SocialLinks() {

    const SocialLinkIcon = (props) => {
        return (
            <div>
                <a href={props.link} alt={props.alt} target='_blank'>
                    <img
                        src={props.image}
                        className='img-social'
                    />
                </a>
            </div>
        );
    }

    return (
        <div>
            <Section title="Social Links">
                <div className='sectionContents'>
                    <SocialLinkIcon link="https://www.instagram.com/od___15/" alt="Instagram" image={instagram} />
                    <SocialLinkIcon link="https://twitter.com/OD___15" alt="Twitter" image={twitter} />
                    <SocialLinkIcon link="https://soundcloud.com/music-skynap" alt="Soundcloud" image={soundcloud} />
                    <SocialLinkIcon link="https://open.spotify.com/user/olg5o8jgpkp8rns2upoq0gn6m" alt="Spotify" image={spotify} />
                    <SocialLinkIcon link="https://github.com/T0-0D" alt="Github" image={github} />
                </div>
            </Section>
        </div>
    );
}


export default function Home(component) {

    return (
        <div>
            <About />
            <Skills />
            <History />
            <SocialLinks />
        </div>
    );
}
