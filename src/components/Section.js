import "./Section.css"

export default function Section(props) {
    return(
        <div>
            <h2 className='sectionTitle'>
                {props.title}
            </h2>
            <div className='sectionContent'>
                {props.children}
            </div>
        </div>
    );
}
