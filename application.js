//-----------------------------------------Modal creation-----------------------------------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the element that closes the modal
var clo = document.getElementById("close");
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user close the modal
clo.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//----------------------------------------Dispaly movie info--------------------------------------------------------------------------------------
var img = document.createElement("img");
function dispaly_modal(movie_id) {

fetch("http://localhost:8000/api/v1/titles/" + movie_id)
  .then(response => response.json())
  .then (data => {
     // add the image in the modal
     img.src = data.image_url;
     var elm_html = document.getElementById("image_film");
     elm_html.appendChild(img);

    // add movie information in the modal
     Modal_title.textContent = `Titre : ${data.title}`
     Modal_genre.textContent = `Genre : ${data.genres}`
     Modal_date.textContent = `date sortie : ${data.date_published}`
     Modal_rated.textContent = `rated : ${data.votes}`
     Modal_score.textContent = `Score : ${data.imdb_score}`
     Modal_directors.textContent = `Réalisateur : ${data.directors}`
     Modal_actors.textContent = `Acteurs :  ${data.actors}`
     Modal_duration.textContent = `Durée (min) :  ${data.duration}`
     Modal_contry.textContent = `Pays : ${data.countries}`
     Modal_Box_office_result.textContent = `Résultat au Box office : ${data.year}`
     Modal_Description.textContent = `résumé : ${data.description}`

  })
  .catch(error => {
    console.warn('Error', err);
  });

}

//----------------------------------------------Fetch API---------------------------------------------------
// Best movie
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes&page_size=1")
  .then(response => response.json())
  .then (
     data => {
     const image = document.createElement("img");
     image.src = data.results[0].image_url;
     section1.appendChild(image);

     image.onclick = function() {
     dispaly_modal(data.results[0].id);
     modal.style.display = "block";
        }
})
  .catch(error => {
    console.warn('Error', err);
  });


// Seven best movies
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())
  .then (
     data => {
     for (let i = 0; i < 8; i++) {
        const image = document.createElement("img");
        image.src = data.results[i].image_url;
        section2.appendChild(image);
        //add clickable image
        image.onclick = function() {
        modal.style.display = "block";
        dispaly_modal(data.results[i].id);

        }
     }
  })
  .catch(error => {
    console.warn('Error', err);
  });

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes&page_size=1")
  .then(response => response.json())
  .then (
     data => {
     const titre = document.createElement("p");
     title.src = data.results[0].title;
     best-movie_description.appendChild(titre);
        })


//Category1:: Action movies

fetch("http://localhost:8000/api/v1/titles/?genre_contains=Action&sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())

  .then (
     data => {
     for (let i = 0; i < 8; i++) {
        const image = document.createElement("img");
        image.src = data.results[i].image_url;
        section3.appendChild(image);
        //add clickable image
        image.onclick = function() {
        modal.style.display = "block";
        dispaly_modal(data.results[i].id);

        }

     }

  })
  .catch(error => {
    console.warn('Error', err);
  });


//Category2: Fantasy movies
fetch("http://localhost:8000/api/v1/titles/?genre_contains=Fantasy&sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())

  .then (
     data => {
     for (let i = 0; i < 8; i++) {
        const image = document.createElement("img");
        image.src = data.results[i].image_url;
        section4.appendChild(image);
        //add clickable image
        image.onclick = function() {
        modal.style.display = "block";
        dispaly_modal(data.results[i].id);

        }
     }

  })
  .catch(error => {
    console.warn('Error', err);
  });


//Category3: Sci-Fi movies
fetch("http://localhost:8000/api/v1/titles/?genre_contains=Sci-Fi&sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())

  .then (
     data => {
     for (let i = 0; i < 8; i++) {
        const image = document.createElement("img");
        image.src = data.results[i].image_url;
        section5.appendChild(image);
        //add clickable image
        image.onclick = function() {
        modal.style.display = "block";
        dispaly_modal(data.results[i].id);

        }
     }

  })
  .catch(error => {
    console.warn('Error', err);
  });


//-----------------------------------------Carousel---------------------------------------------------
//
//const slidesContainer = document.getElementById("section2");
//const slide = document.querySelector(".slide");
//const prevButton = document.getElementById("slide-arrow-prev1");
//const nextButton = document.getElementById("slide-arrow-next"1);
//
//nextButton.addEventListener("click", () => {
//  const slideWidth = slide.clientWidth;
//  slidesContainer.scrollLeft += slideWidth;
//});
//
//prevButton.addEventListener("click", () => {
//  const slideWidth = slide.clientWidth;
//  slidesContainer.scrollLeft -= slideWidth;
//});




