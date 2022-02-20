import "./PageTitle.css"

export default function PageTitle(props){
    return(
        <div className="pageTitles">
            <h2>{props.PageTitle}</h2>
            <h4>{props.PageDescription}</h4>
        </div>
    );
}