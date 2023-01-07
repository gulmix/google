import { Button } from '@material-ui/core'
import { MicOutlined, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvide'
import { actionTypes } from './reducer'

const Search = ({ hideButtons = false }) => {
   const [{ }, dispatch] = useStateValue()
   const [input, setInput] = useState('')
   const navigated = useNavigate();
   const search = e => {
      e.preventDefault()
      console.log(input)
      dispatch({
         type: actionTypes.SET_SEARCH_TERM,
         term: input
      })
      navigated('/search')
   }

   return (
      <form className='search'>
         <div className='search__input'>
            <SearchOutlined className='search__inputIcon' />
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicOutlined />
         </div>
         {!hideButtons ? (
            <div className='search__buttons'>
               <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
               <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
         ) : (
            <div className='search__buttons'>
               <Button className='searchButtonHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
               <Button className='searchButtonHidden' variant='outlined'>I'm Feeling Lucky</Button>
            </div>
         )}
      </form>
   )
}

export default Search