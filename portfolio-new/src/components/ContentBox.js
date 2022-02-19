import './ContentBox.css'

const ContentBox = (props) => {
    return(
    <div className="content-box">
        {props.children}
    </div>
    )
}
export default ContentBox;
