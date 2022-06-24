const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'a0eb5841',
            s: searchTerm
        }
    });
    console.log(response);
    // console.log(response.data);

    if (response.data.Error) {
        return [];
    }
    return response.data.Search;
};

createAutoComplete({
    root: document.querySelector('.autocomplete')
});

createAutoComplete({
    root: document.querySelector('.autocomplete-2')
});

createAutoComplete({
    root: document.querySelector('.autocomplete-3')
});

// document.querySelector('.test').addEventListener('click', (event) => {
//     console.log(event.target);
// });

// let dataa;
// fetchData().then((d) => {dataa = d});

const onMovieSelect = async (movie) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'a0eb5841',
            i: movie.imdbID
        }
    });
    console.log(response);

    console.log(movieTemplate(response.data));
    document.querySelector('#summary').innerHTML = movieTemplate(response.data);
    console.log(document.querySelector('#summary').innerHTML);
};


const movieTemplate = (movieDetail) => {
    return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetail.Poster}">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieDetail.Title}</h1>
                    <h4>${movieDetail.Genre}</h4>
                    <p>${movieDetail.Plot}</p>
                </div>
            </div>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
};
