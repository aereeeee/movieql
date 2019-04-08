export let movies = [
    {
        id : 0,
        name: "Aeree",
        score:19,
        gender:"female"
    },
    {
        id : 1,
        name: "Aeree",
        score:19,
        gender:"female"
    },
    {
        id : 2,
        name: "Aeree",
        score:19,
        gender:"female"
    },
    {
        id : 3,
        name: "Aeree",
        score:19,
        gender:"female"
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie =>movie.id === id); 
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie=> movie.id !== id);
    if(cleanedMovies.length<movies.length){
        movies=cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length+1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}