import PropTypes from 'prop-types'

const Container = ({children, className = ""}) => {
    return (
        <div className={`w-full mx-auto h-fit ${className ? className : 'bg-abu-bg'}`}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Container