import { useState } from "react";
// import SelectedGenre from "./SelectedGenre";
// import SelectedGenre from "./SelectedGenre";
// import data from './data/data.json'

// const [allMovies, setAllMovies] = useState(data.map(obj => {
//     return {...obj, genre};
//   })
// )

function MovieSelector(){
    
    const [selectedGenre, setSelectedGenre] = useState(''); //Tracks the currently selected genre. 
    const [isLoading, setIsLoading]=  useState (true); //Indicates if the app is "loading" movie data. 
    const [error, setError] = useState(""); //Stores error messages, if any. 
    const [movies, setMovies] = useState ([{title: "", genre: ""},]); //Holds the list of movies for the selected genre.
    
    
    //need to create a function handle for each event listed above. 
    
    function handleGenre() {
        setSelectedGenre('');
        // selectedGenre = "Horror";
        // selectedGenre ="Drama";
        // selectedGenre = "Crime";
        // setSelectedGenre('Drama');
        // setSelectedGenre('Crime');
        // return <form>
        //     <select id ="genre">
        //     <option>Horror</option>
        //     <option>Drama</option>
        //     <option>Crime</option>
        //     </select>
        // //     <input type = "button" onClick ="selectedGenre"></input>
        // // </form>; //this creates dropdown list button 
        
}
 function handleLoading () {
    setIsLoading (true)
    // isLoading ? "Fetching Movies" : "Movies not found!" ;
 }
function handleError () {
    setError ('"Unable to fetch genre');
}

return (
    <div>
        <form className="genre">
            <select>
                <option onClick= {handleGenre} >Horror</option>
                <option onClick= {handleGenre} >Drama</option>
                <option onClick= {handleGenre} >Crime</option> 
            </select>
        </form>
        <button onClick={handleLoading}> {isLoading ? "Fetching Movies" : "Movies not found!" }</button>

    </div>
)


};


export default MovieSelector; 