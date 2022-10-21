/*Variables y constantes*/

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

//TODO: Aprender la diferencia entre querySelector, getElementsById, getElementsByClassName, etc.

//Event Listeners
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside)


//Funciones
function toggleDesktopMenu() {
  aside.classList.add("inactive")
  desktopMenu.classList.toggle("inactive")
};


function toggleMobileMenu() {
  aside.classList.add("inactive")
  mobileMenu.classList.toggle("inactive")
};

function toggleCarritoAside() {
  aside.classList.toggle("inactive")
  desktopMenu.classList.add("inactive")
  mobileMenu.classList.add("inactive")
}

const productList = [];
productList.push(
  {
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Imagen de una bicicleta"
  }
);
productList.push(
  {
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Imagen de una pantalla"
  }
);
productList.push(
  {
    name: "Ordenador",
    price: 620,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Imagen de un ordenador"
  }
);

function renderProducts(arr) {
    for (product of arr) {
    /* 
    *Instrucciones:
    *Crear manualmente cada una de las etiquetas HTML con sus atributos y clases
    *Poner cada etiqueta dentro de donde le toca (con appendChild)
    */

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.setAttribute("alt", product.alt);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    
    const productInfoDiv = document.createElement("div");
    
    const price = document.createElement("p");
    const productName = document.createElement("p");
    productInfoDiv.append(price, productName);
    
    price.innerText = product.price + "€";
    productName.innerText = product.name;
    
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productImgCart.setAttribute("alt", "Icono añadir al carrito");
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure)
    productCard.append(productImg, productInfo)

    

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
