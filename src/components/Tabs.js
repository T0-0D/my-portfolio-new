import "./Tabs.css"

function setTab(props) {
    console.log(props);
}

export default function Tabs(props) {
    return (
        <div className="tabs">
            <button className="tab" onClick={setTab()}>
                {props.tab1Name}
            </button>

        </div>
    );
}
