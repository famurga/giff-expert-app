export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=m9x8fZlcMWd6rHHElhIXitvIofoFnmeI&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data);

    const gifs = data.map( gif =>{
        return {
            id: gif.id,
            title : gif.title,
            url : gif.images?.downsized_medium.url
        }
    })

    console.log('los gifs',gifs)

    return gifs;
}