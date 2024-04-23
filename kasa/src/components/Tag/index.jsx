import './index.scss'


function Tag(props) {

    return (
        <div className="tags__container" key={`$tags-{props.accomodationId}`}>
            {props.tags.map(tags => (
                <div className="tags__tag">
                    {tags}
                </div>
            ))}
        </div>
    )
}

export default Tag