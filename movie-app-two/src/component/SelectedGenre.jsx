// import data from './data/data.json'
// const [allMovies, setAllMovies] = useState(data.map(obj => {
//     return {...obj, genre};
//   })
// )
const SelectedGenre = props => {
    let {title, genre} = props.movie;
        return(
            <div className='movie-genre'>
                <h3>{title}</h3>
                <option>{genre};</option>
            </div>
        );
};

export default SelectedGenre; 