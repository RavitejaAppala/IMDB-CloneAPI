
// .......rapid api.....
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "ce272379d4msh52a9ed642d72249p19e688jsn5cf8f40a6979"
  }
})
.then(response => response.json())
.then(data => {
  const list = data.d;

  list.map((item) => {
    const name = item.l;
    const poster = item.i.imageUrl;
    const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
    document.querySelector('.movies').innerHTML += movie;
  })
})
.catch(err => {
  console.error(err);
});

// .............cinema..................

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "ce272379d4msh52a9ed642d72249p19e688jsn5cf8f40a6979"
  }
})
.then(response => response.json())
.then(data => {
  const list = data.d;

  list.map((item) => {
    const name = item.l;
    const poster = item.i.imageUrl;
    const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
    document.querySelector('.cinema').innerHTML += movie;
  })
})
.catch(err => {
  console.error(err);
});


// .........rapid api end..


fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "ce272379d4msh52a9ed642d72249p19e688jsn5cf8f40a6979"
  }
})
.then(response => response.json())
.then(data => {
  const list = data.d;

  list.map((item) => {
    const name = item.l;
    const poster = item.i.imageUrl;
    const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
    document.querySelector('.tvshows').innerHTML += movie;
  })
})
.catch(err => {
  console.error(err);
});