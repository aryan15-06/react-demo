import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

// css import
import './Navbar.css';

// context import
import ThemeContext from '../../context/ThemeContext';

// component import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import useDebounce from '../../hooks/useDebounce';
import useMovieList from '../../hooks/useMovieList';


function Navbar () {
  // const resultListRef = useRef(null);
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const {movieList} = useMovieList(searchTerm);
  const navigator = useNavigate();

  const {theme, setTheme} = useContext(ThemeContext)

  function updateTheme(){
    if(theme == 'dark'){
      setTheme('light')
      localStorage.setItem('app-theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('app-theme', 'dark');
    }
  }

  function handleAutoComplete(e, movieImdbId) {
    console.log("onMouseDown",e.target);
    navigator(`/movie/${movieImdbId}`);
  }

  return (
    <div className="navbar-wrapper">
       <div className='movie-base-title'><Link to={`/`}>Movie Base</Link></div>
       <div>
          <input
           id='movie-search-input'
           type="text"
           onFocus={() => {
            // resultListRef.current.style.display = 'block';
            setIsAutoCompleteVisible(true);
           }}
           onBlur={() => {
            // resultListRef.current.style.display = 'none';
            setIsAutoCompleteVisible(false);
           }}
           onChange={useDebounce((e) => {
            setSearchTerm(e.target.value);
           })}
           placeholder='what movie you are looking for...'
          />

          <div id='result-list' style={{display: (isAutoCompleteVisible) ? 'block' : 'none'}}>
            {movieList.length > 0 &&
               movieList.map(movie => (
               <div
                  onMouseDown={(e) => handleAutoComplete(e, movie.imdbID) }
                  key={movie.imdbID}
                  className='autocomplete-result'>
                  {movie.Title}
               </div>
               )) }
          </div>
       </div>

       <div onClick={updateTheme}>
       <FontAwesomeIcon className='theme-icon' icon={(theme == 'dark') ? faSun : faMoon}  />
       </div>
    </div>
  )
}

export default Navbar;