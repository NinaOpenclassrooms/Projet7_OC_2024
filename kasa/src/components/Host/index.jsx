import './index.scss'

function Host(props) {
    return (
        <div className="Host__container" key={props.hostName}>
            <span className="Host__name">{props.hostName}</span>
            <img className="Host__img" src={props.hostPicture} />
        </div>
    )
}

export default Host