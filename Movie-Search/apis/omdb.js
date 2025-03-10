export function searchMovie(title) {
    return `https://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=e96364c1`;
}

export function searchMovieById(id) {
    return `https://www.omdbapi.com/?i=${encodeURIComponent(id)}&apikey=e96364c1`;
}