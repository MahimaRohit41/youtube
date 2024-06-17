import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleButtonClick = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={() => handleToggleButtonClick()} className='h-8 cursor-pointer' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' alt='menu'/>
        <img className='h-8 mx-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqpDAlNBhTKmnIcY99fIUZTBjybFasao-8Q&s' atl='logo'/>
      </div>
      <div className='col-span-10 mx-40 flex'>
        <input className='w-1/2 px-2 border border-gray-400 rounded-l-2xl' type='text' placeholder='Search'/>
        <button className='px-5 border border-gray-400 rounded-r-2xl bg-gray-200'>
          <img className='h-4' src='https://cdn-icons-png.freepik.com/256/141/141944.png?semt=ais_hybrid' alt='serach-icon'/>
        </button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user-logo'/>
      </div>
        
    </div>
  )
}

export default Head