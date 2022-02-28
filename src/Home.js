import './Home.css';
import PageTitle from './components/PageTitle';
import SectionTitle from './components/SectionTitle';
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
            <SectionTitle title="About" />

            <div className='sectionContents'>
                <div className='blcok-left'>
                    <img
                        src={profile}
                        alt="Profile photo"
                        id='img-profile'
                    />
                    <div id='profile-name'>

                    </div>
                </div>

                <div className='blcok-center'>
                    <p className='content-center'>Name</p>
                    <p className='content-center'>Handle</p>
                    <p className='content-center'>Birth Year</p>
                    <p className='content-center'>Hometown</p>
                    <p className='content-center'>Occupation</p>
                    <p className='content-center'>Education</p>
                    <p className='content-center'>Things I Like</p>
                    <p className='content-center'>Hobby</p>
                </div>

                <div className='block-right'>
                    <p className='content-right'>Takuto Odaira</p>
                    <p className='content-right'>OD</p>
                    <p className='content-right'>2001</p>
                    <p className='content-right'>Kanagawa Prefecture</p>
                    <p className='content-right'>Student</p>
                    <p className='content-right'>University of Aizu / Computer Science</p>
                    <p className='content-right'>Music / Movie / Cofee</p>
                    <p className='content-right'>DJ / Music Producing / Programning</p>
                </div>
            </div>
        </div>
    );
}


function SocialLinkIcon (props) {
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


function SocialLinks() {
    return (
        <div>
            <SectionTitle title="Social Links" />

            <div className='sectionContents'>
                <SocialLinkIcon link="https://www.instagram.com/od___15/" alt="Instagram" image={instagram} />
                <SocialLinkIcon link="https://twitter.com/OD___15" alt="Twitter" image={twitter} />
                <SocialLinkIcon link="https://soundcloud.com/music-skynap" alt="Soundcloud" image={soundcloud} />
                <SocialLinkIcon link="https://open.spotify.com/user/olg5o8jgpkp8rns2upoq0gn6m" alt="Spotify" image={spotify} />
                <SocialLinkIcon link="https://github.com/T0-0D" alt="Github" image={github} />
            </div>
        </div>
    );
}


export default function Home(component) {
    return (
        <div>
            <About />
            <SocialLinks />
        </div>
    );
}
