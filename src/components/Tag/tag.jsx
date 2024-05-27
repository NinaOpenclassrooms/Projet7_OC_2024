import PropTypes from 'prop-types'

import './tag.scss'
function Tag({ tags }) {

    return (
        <div className='tags__container'>
            {tags.map(tag => (
                <div className='tags__tag' key={tag}>
                    {tag}
                </div>
            ))}
        </div>
    )
}

Tag.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
}

export default Tag