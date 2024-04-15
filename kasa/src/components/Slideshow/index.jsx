import pictures from '../../data/accomodationList.json'
function Slideshow(props) {
    return (
        <div className='slideshow__container'>
            {pictures.map((pictures) => (
                <div>
                    <img src='{pictures.[0]}' className='slideshow__img' />
                </div>

            ))}
        </div>
    )

}

export default Slideshow