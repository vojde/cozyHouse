function myFunction() {
    const burger = document.querySelector('.burger');
    const burger_menu = document.querySelector('.burger_menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active')
        burger_menu.classList.toggle('burger_menu_active')
    })

}

for (let i = 0; i < cost.length; i++) {
    let id = document.getElementById(cost[i].id);
    id.addEventListener('click', () => fun(i));
}

function fun(i) {
    let pop_up = document.getElementById('pop-up');
    pop_up.classList.toggle('active_pop_up');
    let animalName = document.getElementById('animalName');
    let breed = document.getElementById('breed');
    let description = document.getElementById('description');
    animalName.innerHTML = cost[i].animalName;
    breed.innerHTML = cost[i].breed;
    description.innerHTML = cost[i].description;
    let img = document.getElementById('pop-up-img');
    img.src = cost[i].img;
}

function closePopup() {
    let pop_up = document.getElementById('pop-up');
    pop_up.classList.toggle('active_pop_up');
}

let windowOuterWidth = window.outerWidth;

if (windowOuterWidth <= 375) {
    $("#box-pop-up-img").hide();
}
