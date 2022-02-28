import PageTitle from './components/PageTitle';
import SectionTitle from './components/SectionTitle';


function startButton(props) {

    return (
        <div className="homeTabs">
            <button type="button" className="btn-homeTabs">
                aaa
            </button>
        </div>
    );

}


function About(){
    
    return(
        <div>
            <SectionTitle title="About" />

            <div id="aboutContents">
                <div>
                    Name
                </div>
        
                <div>
                    Takuto Odaira
                </div>
            </div>
        </div>
    );

}


export default function Home(component) {
    
    return (
        <div>
            <PageTitle 
                PageTitle="Hi there." 
                PageDescription="Here's brief introduction about myself." 
            />
            <About />
        </div>
    );

}
