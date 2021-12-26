const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const imgElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearElement = document.getElementById("clear-films");


const ui = new UI();
const storage = new Storage();


eventlisteners();

function eventlisteners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        
        ui.LoadAllFilms(films);
    })
    cardBody.addEventListener("click",deleteitem);
    clearElement.addEventListener("click",clearAllFilms)
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const img = imgElement.value;

    if (title==="" || director ==="" || img ===""){

        ui.displayMessages("Tüm alanları doldurun!!!","danger")

    } else {
        newFilm = new Film(title,director,img);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("İşlem Başarılı.","success")
    }



    ui.clearInput(titleElement,directorElement,imgElement);
    e.preventDefault();
}

function deleteitem(e){

        if(e.target.id === 'delete-item'){
            ui.DeleteItemFromUI(e.target);
            console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
            storage.DeleteItemFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
            ui.displayMessages("Silme İşlemi Başarılı","success")
        }
    
}

function clearAllFilms(){

    if(confirm("Emin Misiniz?")){
        ui.ClearAllFilmsFromUI();
        storage.ClearAllFilmsFromStorage();
    }
    


}