import React from 'react'

const Button = (props) => {
    const {name} = props;
  return (
    <div>
        <button className='px-5 py-1 m-2 bg-gray-300 rounded-xl'>{name}</button>
    </div>
  )
}

export default Button