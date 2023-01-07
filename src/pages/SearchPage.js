import React from 'react'
import { useStateValue } from '../StateProvide'
import './SearchPage.css'
import Response from '../res'
import { Link } from 'react-router-dom'
import Search from '../Search'
import { DescriptionOutlined, ImageOutlined, LocalOfferOutlined, MoreVertOutlined, RoomOutlined, SearchOutlined } from '@material-ui/icons'
import useGoogleSearch from '../useGoogleSearch'

const SearchPage = () => {
   const [{ term }, dispatch] = useStateValue()
   const { data } = useGoogleSearch(term)

   return (
      <div className='searchPage'>
         <div className='searchPage__header'>
            <Link to='/'>
               <img className='searchPage__logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
            </Link>
            <div className='searchPage__headerBody'>
               <Search hideButtons />
               <div className='searchPage__options'>
                  <div className='searchPage__optionsLeft'>
                     <div className='searchPage__option'>
                        <SearchOutlined />
                        <Link to='/all'>All</Link>
                     </div>
                     <div className='searchPage__option'>
                        <DescriptionOutlined />
                        <Link to='/news'>News</Link>
                     </div>
                     <div className='searchPage__option'>
                        <ImageOutlined />
                        <Link to='/images'>Images</Link>
                     </div>
                     <div className='searchPage__option'>
                        <LocalOfferOutlined />
                        <Link to='/shopping'>Shopping</Link>
                     </div>
                     <div className='searchPage__option'>
                        <RoomOutlined />
                        <Link to='/maps'>Maps</Link>
                     </div>
                     <div className='searchPage__option'>
                        <MoreVertOutlined />
                        <Link to='/more'>More</Link>
                     </div>
                  </div>
                  <div className='searchPage__optionsRight'>
                     <div className='searchPage__option'>
                        <Link to='/settings'>Settings</Link>
                     </div>
                     <div className='searchPage__option'>
                        <Link to='/tools'>Tools</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {term && (
            <div className='searchPage__results'>
               <p className='searchPage__resultsCount'>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
               {data?.items.map(item => (
                  <div className='searchPage__result'>
                     <a href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                           <img className='searchPage__resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} />
                        )}
                        {item.displayLink}
                     </a>
                     <a href={item.link} className='searchPage__resultTitle'>
                        <h2>{item.title}</h2>
                     </a>
                     <p className='searchPage__resultSnippet'>{item.snippet}</p>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

export default SearchPage