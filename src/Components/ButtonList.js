import React from 'react';
import Button from './Button';

const buttotName = ["All", "Music","Sports","News","Web Development","T-Series","Gaming","Live","Trending"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        buttotName.map((name) => <Button name={name}/> )
      }
    </div>
  )
}

export default ButtonList