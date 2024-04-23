import './banner.scss'

function Banner(props) {
    return (
        <div className={`banner banner--${props.page}`} >
            <h1 className='banner__title'>{props.title}</h1>
            <img src={props.img} className='banner__img' />
        </div>
    )
}

export default Banner