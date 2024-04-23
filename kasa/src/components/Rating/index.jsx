import starFilled from '../../assets/star-filled.svg'
import starUnfilled from '../../assets/star-unfilled.svg'


function Rating(props) {
    const scaleValue=props.scaleValue
    const range = [1, 2, 3, 4, 5]
    return (
        <div className="rating__container">
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <img className='rating__star' src={starFilled} key={rangeElem.toString()} /> : <img className='rating__star' src={starUnfilled} key={rangeElem.toString()} />
            )}
        </div>
    )
}

export default Rating