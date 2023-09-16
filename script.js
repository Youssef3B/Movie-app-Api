let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let all = document.getElementById('all');
let please = document.getElementById('please');


// http://www.omdbapi.com/?i=tt3896198&apikey=fb86cab1

async function getdata(){
    try{

        let moviename = inp.value;
        let api = `https://www.omdbapi.com/?t=${moviename}&apikey=fb86cab1`;
        let response = await fetch(api);
        let data = await response.json();
        
        all.innerHTML = `
        <div class="details">
        <div>
            <img src="${data.Poster}" alt="">
        </div>
        <div class="right">
            <h2>${data.Title}</h2>
            <h4><span><i class='bx bxs-star'></i></span>${data.imdbRating}</h4>
            <div class="date">
                <p>${data.Rated}</p>
                <p>${data.Year}</p>
                <p>${data.Runtime}</p>
            </div>
               <div class="version">
                ${data.Genre.split(', ').map(genre => `<h6>${genre}</h6>`).join('')}
              </div>
        </div>
    </div>
    <div class="story">
        <h5>Plot :</h5>
        <p>${data.Plot}</p>
        <h5>Actors :</h5>
        <p>${data.Actors}</p>

    </div>
        
        `
       
    }
    catch{
        please.style.display = 'block';
        please.innerText   = 'Sorry, We Dont fount Your Movie Please Try Again.'

    }
}


btn.addEventListener('click', function(){
    getdata();

})