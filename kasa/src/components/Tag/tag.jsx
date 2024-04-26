
import PropTypes from 'prop-types'

import './tag.scss'


//KEY A REVOIR
function Tag({ tags }) {

    return (
        <div className="tags__container">
            {tags.map(tags => (
                <div className="tags__tag" key={tags}>
                    {tags}
                </div>
            ))}
        </div>
    )
}

Tag.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
}

export default Tag