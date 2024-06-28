let iteams = [
    {
        title: "iPhone 15 Pro Max (256 GB) - Black Titanium",
        description: "iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back.",
        price: "$ 19.99",
        image: "images/amazon/7.jpg",
        button: `<a href="#" class="btn btn-primary">Add to Card</a>`,
    },
    {
        title: "iPad Pro 11″ (M4 ,256GB): Ultra Retina XDR Display",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: "$ 1172.61",
        image: "images/amazon/3.jpg",
        button: `<a href="#" class="btn btn-primary">Add to Card</a>`,
    },
]

iteams.forEach((val , index) => {
    let card_iteams = document.getElementById("additeams");
    let div = document.createElement("div");

    let title = document.createElement("h5");
    let disc = document.createElement("p");
    let price = document.createElement("price");
    let img = document.createElement("img");
    let btn = document.createElement("button");

    div.classList = "card-body shadow  p-3 mb-5 bg-white rounded";

    title.innerHTML = val.title;
    title.classList = "card-title"; 

    disc.innerHTML = val.description;
    disc.classList = "card-text";

    price.innerHTML = val.price;
    price.classList = "card-price";

    img.src = val.image;
    img.classList = "card-img-top";

    btn.innerHTML = val.button;

    div.append(img);
    div.append(title);
    div.append(disc);
    div.append(price);
    div.append(btn);

    card_iteams.append(div);
})

let data = JSON.parse(window.localStorage.getItem('data')) || [];

function addcart(){
    let title = document.querySelector("card-title");
    let price = document.querySelector("card-price");
    let img = document.querySelector("card-img-top");
}