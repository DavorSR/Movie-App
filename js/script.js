//TMBD getting the api's

const apyKey = 'api_key=e94e7baa546459bf2dbb93a43ae140aa';
const baseURL = 'https://api.themoviedb.org/3';
const apiUrl = baseURL + '/discover/movie?sort_by=popularity.desc&' + apyKey;
const imgURL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

getMovies(apiUrl)

function getMovies(url) {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        showMovies(data.results);

    })
}

function showMovies(data) {
    main.innerHTML = '';


    data.forEach(movie => {

        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <img src="${imgURL + poster_path}" alt="${title}">
        
        <div class="info">
            <h3>${title}</h3>
            <span class="${getRatingColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="description">
            <h3>Description</h3>
          ${overview}
        </div>`


        main.appendChild(movieElement);

    })
}

function getRatingColor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red';
    }
}

//////////////////////////////////////