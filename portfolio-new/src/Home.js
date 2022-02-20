import ContentBox from './components/ContentBox';
import SectionTitle from './components/SectionTitle';

function About(){
    
    return(
        <div>
            <SectionTitle title="About" />
            <div>Name</div>
            <div>Takuto Odaira</div>
        </div>
    );

}


export default function Home() {
    
    return (
        <div>
            <ContentBox>
                <About />
            </ContentBox>
        </div>
    );

}
