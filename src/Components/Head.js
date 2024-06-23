import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { isPending, miniSerializeError } from '@reduxjs/toolkit';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() =>{
    //Make API call after every key press
    //but if difference between 2 API call <200 ms decline the API call
    //Debouncing
    const timer = setTimeout( ()=> {
      if(searchCache[searchQuery])
        setSuggestions(searchCache[searchQuery]);
      else
        getSearchSuggestion()
    }, 200);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery])

  // key - i
  // Render the Component
  // Call useEffect
  // Make an API call after 200 miniSerializeError

  // key - iP 
  // If press P before 200 ms, destroy the Component(useEffect return method)
  // render Component
  // Call useEffect
  // Make an API call after 200 ms 

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));
  }

  const handleToggleButtonClick = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggleButtonClick()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqpDAlNBhTKmnIcY99fIUZTBjybFasao-8Q&s"
          atl="logo"
        />
      </div>
        <div className="col-span-10 px-10">
          <div className='flex'>
            <input
              className="w-1/2 px-5 border border-gray-400 rounded-l-2xl"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="px-5 py-2 border border-gray-400 rounded-r-2xl bg-gray-200">
              <img
                className="h-2"
                src="https://cdn-icons-png.freepik.com/256/141/141944.png?semt=ais_hybrid"
                alt="serach-icon"
              />
            </button>
          </div>
          { showSuggestions && (<div className='fixed bg-white px-3 py-2 w-[33rem] shadow-lg rounded-lg border border-gray'>
            <ul>
              {
                suggestions.map((suggestion) => (
                  <li className='py-1 px-1 my-1 shadow-sm hover:bg-gray-100' key={suggestion}>🔍 {suggestion}</li>
                ))
              }
            </ul>
          </div>)}
        </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-logo"
        />
      </div>
    </div>
  );
}

export default Head;