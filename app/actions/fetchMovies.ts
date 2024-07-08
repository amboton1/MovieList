'use server'

export async function fetchLatestMovies() {
    const apiKey = process.env.OMDB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`);
    const data = await response.json();
    return data;
}

export async function fetchSimilairMovies(movieId: string) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar`);
    const data = await response.json();
    return data;
}