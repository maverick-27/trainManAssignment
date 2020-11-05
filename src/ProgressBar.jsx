import React  from 'react'
import PropType from 'prop-types'

const ProgressBar  =({value , max}) =>{
    return(
        <progress  value={value} max={max}/>
    )
};

ProgressBar.prototype = {
    value: PropType.number.isRequired,
    max: PropType.number
}

ProgressBar.defaultProps={
    max:100,
    
}


export default ProgressBar
