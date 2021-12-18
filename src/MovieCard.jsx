
import styles from  './MovieCard.module.cthis.setState({ :  });';
export function MovieCard({movie}){
    const imageurl = "http://image.tmdb.org/t/p/w300" +  movie.poster_path;

    return (
    <li className="MovieCard">
        <img src={imageurl} alt={movie.title} />
        <div>{movie.title}</div>
    </li>)
}