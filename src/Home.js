import PageTitle from './components/PageTitle';
import Tabs from './components/Tabs.js'
import ContentBox from './components/ContentBox';
import SectionTitle from './components/SectionTitle';


function startButton(props) {

    return (
        <div className="homeTabs">
            <button type="button" className="btn-homeTabs">
                {props.tab1Name}
            </button>
        </div>
    );

}


function About(){
    
    return(
        <div>
            <SectionTitle title="About" />
            <div>Name</div>
            <div>Takuto Odaira</div>
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
            <startButton tab1Name="Start"/>
        </div>
    );

}
