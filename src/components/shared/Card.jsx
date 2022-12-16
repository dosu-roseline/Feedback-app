import PropsTypes from 'prop-types'

function Card ({children, reverse}) {
    // Conditional class //
//   return (<div className={`card ${reverse && 'reverse'}`}>{children}</div> )

// Conditional Style 
return(
    <div className="card" style={{
        backgroundColor: reverse? 'rgba(0,0,0,0.4)' : '#ffff',
        color: reverse? '#fff' : '#000',
    }}>
        {children}
    </div>
)
}


Card.defaultProps = {
    reverse: false,
}

Card.PropsTypes = {
    children: PropsTypes.node.isRequired,
    reverse: PropsTypes.bool,
}

export default Card