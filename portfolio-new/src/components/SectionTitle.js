import "./SectionTitle.css"

export default function SectionTitle(props){
    return(
        <div>
            <h2 className="sectionTitle">

                {props.title}
            </h2>
        </div>
    );
}
