

const selectedGenre = props => {
    let {title, genre} = props.movie;
        return(
            <div>
                <h3>{title}</h3>
                <button className="genre" onClick={genre}>Horror</button>
            </div>
        );
};

export default selectedGenre; 