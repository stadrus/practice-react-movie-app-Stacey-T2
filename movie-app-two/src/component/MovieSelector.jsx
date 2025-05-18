import { useState } from "react";


function MovieSelector(){

    const [selectedGenre, setSelectedGenre] = useState(''); //Tracks the currently selected genre. 
    const [isLoading, setIsLoading]=  useState (true); //Indicates if the app is "loading" movie data. 
    const [error, setError] = useState(""); //Stores error messages, if any. 
    const [movies, setMovies] = useState ([{title: "", genre: ""},]); //Holds the list of movies for the selected genre.


    //need to create a function handle for each event listed above. 
    
    function handleGenre() {
        setSelectedGenre('');
        
      
        // return <form>
        //     <select id ="genre">
        //     <option>Horror</option>
        //     <option>Drama</option>
        //     <option>Crime</option>
        //     </select>
        // //     <input type = "button" onClick ="selectedGenre"></input>
        // // </form>; //this creates dropdown list button 
        
}
 function handleLoading (){
    setIsLoading(true);
    // return
    //     <button onClick= {isLoading ? "Fetching Movies" : "Movies not found!" }></button>;
    
 }


return (
    <div className="selectedGenre">
        <form className="genre">
            <select>
            <option>{selectedGenre}</option>
            <option>Drama</option>
            <option>Crime</option> 
            <button onClick= {isLoading ? "Fetching Movies" : "Movies not found!" }></button>;
            </select>
        </form>
    </div>
)


};


export default MovieSelector; 