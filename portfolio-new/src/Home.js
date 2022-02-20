import PageTitle from './components/PageTitle';
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
            <PageTitle 
                PageTitle="Hi there."
                PageDescription="Here's brief introduction about myself."
            />
            <ContentBox>
                <About />
            </ContentBox>
        </div>
    );

}
