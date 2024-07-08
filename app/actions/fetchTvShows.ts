'use server';

export async function fetchTvShows() {
    const apiKey = process.env.OMDB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${apiKey}`);
    
    const data = await response.json();
    return data;
}

export async function fetchFilteredTVShows(query: string) {
    const apiKey = process.env.OMDB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=${query}&api_key=${apiKey}`);
    
    const data = await response.json();
    return data;
}