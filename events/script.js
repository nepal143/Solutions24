import {events as data,category_img} from "./data.js"

console.log(data)


let container = document.querySelectorAll(".coading_events_grid")[0]
let cat_img = document.querySelectorAll(".coading_img")[0]
const urlParams = new URL(window.location.href).searchParams;
const eventcat = urlParams.get('eventcat');
console.log(eventcat);

cat_img.innerHTML=`<img class="category_img" src="${category_img[eventcat]}" alt="Coading" />`;

for(let i=0;i<data[eventcat].length;i++){
    let div=`<div class="coading_event" onclick="window.location='../Results_page/index.html?eventcat=${eventcat}&eventid=${i}'">
    <span>${data[eventcat][i]}</span>
    </div>`
    container.innerHTML+=div;
}

console.log(container)