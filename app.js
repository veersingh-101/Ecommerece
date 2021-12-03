const items = [
    {
        id:1,
        title: 'Dogadu brown hoddie',
        price: 56,
        text: 'Add to cart',
        img: "./dress_img/d1.jpg"
   },
   {
       id:2,
       title: 'Dogadu brown hoddie',
       price: 56,
       text: "Add to cart",
       img: "./dress_img/d2.jpeg"
   },
   {
       id:3,
       title: 'Dogadu brown hoddie',
       price: 36,
       text: "Add to cart",
       img: "./dress_img/d3.jpg"
    },
    {
        id:4,
        title: 'Dogadu brown hoddie',
        price: 46,
        text: "Add to cart",
        img: "./dress_img/d4.jpg"
    },
    {
        id:5,
        title: 'Dogadu brown hoddie',
        price: 55,
        text: "Add to cart",
        img: "./dress_img/d5.jpg"
    },
    {
        id:6,
        title: 'Dogadu brown hoddie',
        price: 86,
        text: "Add to cart",
        img: "./dress_img/d6.jpg"
    },
    {
        id:7,
        title: 'Dogadu brown hoddie',
        price: 76,
        text: "Add to cart",
        img: "./dress_img/d7.jpg"
    },
    {
        id:8,
        title: 'Dogadu brown hoddie',
        price: 115,
        text: "Add to cart",
        img: "./dress_img/d8.jpg"
    },
];

const sectionCenter = document.querySelector('.section-center')

window.addEventListener('DOMContentLoaded',()=>{
    displayItems(items);
})

function displayItems(dressItems){
    let displayitem = dressItems.map((item)=>{
        console.log(item);

        return `<article class="dress-item">
        <img src=${item.img} alt="d1 image">
        <div class="middle">
            <p class="dress-title">${item.title}</p>
            <p class="dress-price"><del>$85</del><span> $${item.price}</span></p>
            <div class="text">${item.text}</div>
            <span><i class="fas fa-heart"></i></span>
        </div>
    </article>`
    })
    displayitem = displayitem.join("")
    console.log(displayitem)
    sectionCenter.innerHTML = displayitem
}

// <!------------  Javascript for navigation bar  --------------->
    function dropdownMenu(){
        var x = document.getElementById("dropdownclick");
        if (x.className == "topnav"){
            x.className += " responsive";
            // changes class="topnav" to class="topnav responsive"
        }
        else{
            x.className = "topnav"
        }
    }

// let x=3;
// let y=5;
// let z=10;
// console.log(++z + y -y + z + x);