//-----------------------------------------Modal creation-----------------------------------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// close the modal
var clo = document.getElementById("close");
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
function display_modal(movie_id) {

fetch("http://localhost:8000/api/v1/titles/" + movie_id)
  .then(response => response.json())
  .then (data => {
     // add the image in modal
     img.src = data.image_url;
     var elm_html = document.getElementById("image_film");
     elm_html.appendChild(img);

    // add movie information in modal
     Modal_title.textContent = `Titre : ${data.title}`;
     Modal_genre.textContent = `Genre : ${data.genres}`;
     Modal_date.textContent = `date sortie : ${data.date_published}`;
     Modal_rated.textContent = `rated : ${data.rated}`;
     Modal_score.textContent = `Score : ${data.imdb_score}`;
     Modal_directors.textContent = `Réalisateur : ${data.directors}`;
     Modal_actors.textContent = `Acteurs :  ${data.actors}`;
     Modal_duration.textContent = `Durée (min) :  ${data.duration}`;
     Modal_contry.textContent = `Pays : ${data.countries}`;
     Modal_Box_office_result.textContent = `Résultat au Box office : ${data.worldwide_gross_income}`;
     Modal_Description.textContent = `résumé : ${data.description}`;

  })
  .catch(error => {
    console.warn('Error', error);
  });

}

//---------------------------------------------- Fetch API ---------------------------------------------------
// Best movie
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes&page_size=1")
  .then(response => response.json())
  .then (
     data => {
     display_info_best_movie(data.results[0].id);
     var image = document.createElement("img");
     image.src = data.results[0].image_url;
     image_best_movie.appendChild(image);


     btn.onclick = function() {
     display_modal(data.results[0].id);
     modal.style.display = "block";
     }

     image.onclick = function() {
        display_modal(data.results[0].id);
        modal.style.display = "block";

     }
})
  .catch(error => {
    console.warn('Error', error);
  });

//title and description display
function display_info_best_movie(movie_id) {
fetch("http://localhost:8000/api/v1/titles/" + movie_id)
  .then(response => response.json())
  .then (
     data => {
     var best_movie_title = document.getElementById("best_movie_title");
     best_movie_title.textContent = `${data.title}`;

     var best_movie_description = document.getElementById("best_movie_description");
     best_movie_description.textContent = `${data.description}`;

        })

}

// Seven best movies
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())
  .then (
     data => {

     for (let i = 0; i < 7; i++) {
        var image = document.createElement("img");
        image.src = data.results[i].image_url;
        image.className = "class_image";
        //image.classList.add("class_image");
        //image.setAttribute('class', 'class_image');
        section1.appendChild(image);

        //add clickable image
        image.onclick = function() {
            modal.style.display = "block";
            display_modal(data.results[i].id);
        }
     }
    carousel(1);
  })
  .catch(error => {
    console.warn('Error', error);
  });





//Category1:: Action movies

fetch("http://localhost:8000/api/v1/titles/?genre_contains=Action&sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())

  .then (
     data => {
     for (let i = 0; i < 7; i++) {
        var image = document.createElement("img");
        image.src = data.results[i].image_url;
        image.className = "class_image";
        section2.appendChild(image);
        //add clickable image
        image.onclick = function() {
            modal.style.display = "block";
            display_modal(data.results[i].id);

        }

     }
    carousel(2);
  })
  .catch(error => {
    console.warn('Error', error);
  });


//Category2: Fantasy movies
fetch("http://localhost:8000/api/v1/titles/?genre_contains=Fantasy&sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())

  .then (
     data => {
     for (let i = 0; i < 7; i++) {
        var image = document.createElement("img");
        image.src = data.results[i].image_url;
        image.className = "class_image";
        section3.appendChild(image);
        //add clickable image
        image.onclick = function() {
            modal.style.display = "block";
            display_modal(data.results[i].id);

        }
     }
    carousel(3);
  })
  .catch(error => {
    console.warn('Error', error);
  });


//Category3: Sci-Fi movies
fetch("http://localhost:8000/api/v1/titles/?genre_contains=Sci-Fi&sort_by=-imdb_score%2C-votes&page_size=7")
  .then(response => response.json())

  .then (
     data => {
     for (let i = 0; i < 7; i++) {
        var image = document.createElement("img");
        image.src = data.results[i].image_url;
        image.className = "class_image";
        section4.appendChild(image);
        //add clickable image
        image.onclick = function() {
            modal.style.display = "block";
            display_modal(data.results[i].id);

        }
     }
    carousel(4);
  })
  .catch(error => {
    console.warn('Error', error);
  });


//----------------------------------------- Carousel ---------------------------------------------------



function carousel(indx) {

const slidesContainer = document.getElementById("section" + indx);
const slide = document.querySelector(".class_image");
//console.log("test slide", slide );

const prevButton = document.getElementById("btn_prev" + indx);
const nextButton = document.getElementById("btn_next" + indx);

//console.log("btn_prev", prevButton);


nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  console.log("test slideWidth", slideWidth);
  slidesContainer.scrollLeft += slideWidth;

});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  console.log("test slideWidth", slideWidth);
  slidesContainer.scrollLeft -= slideWidth;
});
}


