function UI(){

};

UI.prototype.addFilmToUI= function(newFilm){

  const films = document.getElementById("films");

  films.innerHTML += `
  <tr>
                                            <td><img src="${newFilm.img}" class="img-fluid img-thumbnail"></td>
                                            <td>${newFilm.title}</td>
                                            <td>${newFilm.director}</td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
  `
}

UI.prototype.clearInput = function(element1,element2,element3){
    element1.value ="";
    element2.value ="";
    element3.value ="";
}

UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector(".card-body");

    const div = document.createElement("div");

    div.className = `alert alert-${type}`
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1000
    )

}

UI.prototype.LoadAllFilms = function(films){

    const filmList = document.getElementById("films");
  
    films.forEach(function(film){
        
        filmList.innerHTML += `
        <tr>
                                                  <td><img src="${film.img}" class="img-fluid img-thumbnail"></td>
                                                  <td>${film.title}</td>
                                                  <td>${film.director}</td>
                                                  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                                </tr>
        `

    });


}

UI.prototype.DeleteItemFromUI = function(element) {

    element.parentElement.parentElement.remove();

}
UI.prototype.ClearAllFilmsFromUI = function(){

    const filmList = document.getElementById("films");

    
    
        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }

}