import PageTitle from './components/PageTitle';
import Tabs from './components/Tabs.js'
import ContentBox from './components/ContentBox';
import SectionTitle from './components/SectionTitle';


function homeTabs(props) {

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
            <Tabs tab1Name="About" tab2Name="History" tab3Name="Thngs I do/like "/>
        </div>
    );

}
