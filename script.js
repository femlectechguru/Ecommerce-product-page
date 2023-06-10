const menulogo = document.querySelector('#menu-logo');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.nav__list-detail');
const overlay = document.querySelector('.overlay');
const mainThumbnail = document.querySelector('.main-thumbnail');
const mainthumbnaillightbox = document.querySelector('.lightbox__container .main-thumbnail');
const images = document.querySelectorAll('.preview img');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const amount = document.querySelector('.amount');
const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');
const slider = document.querySelector('.mobile-thumbnail');
const thumbmobile = document.querySelector('.thumb-mob');
const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart-wrp');
const closeLightboxBtn = document.querySelector('.close-lightbox');
const lightbox = document.querySelector('.lightbox');
const addbtn = document.querySelector('.add-btn');
const indicator = document.querySelector('.indicator');
const wrp = document.querySelector('.cart-content');
const nxtBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');


let amountvalue = 0;
let currentimage = 1;

indicator.style.display = 'none';

function openMenu(){
    menu.classList.add('active');
    overlay.classList.add('active');
}
function closeMenu(){
    menu.classList.remove('active');
    overlay.classList.remove('active');
}
function handleplusBtn(){
    amountvalue++;
    amount.innerText = amountvalue;
}
function handleminusBtn () {
    if(amountvalue > 0){
    amountvalue--;
    }
    amount.innerText = amountvalue;
}
function nextImage(){
    if(currentimage == 4){
        currentimage = 1;
    }else{
        currentimage++;
    }
    thumbmobile.src = `./images/image-product-${currentimage}.jpg`;
}
function nxtImage(){
    if(currentimage == 4){
        currentimage = 1;
    }else{
        currentimage++;
    }
    mainthumbnaillightbox.src = `./images/image-product-${currentimage}.jpg`;
}

function previousImage(){
    if(currentimage == 1){
        currentimage = 4;
    }else{
        currentimage--;
    }
    thumbmobile.src = `./images/image-product-${currentimage}.jpg`;
}
function prevImage(){
    if(currentimage == 1){
        currentimage = 4;
    }else{
        currentimage--;
    }
    mainthumbnaillightbox.src = `./images/image-product-${currentimage}.jpg`;
}
function toggleCart(){
    cart.classList.toggle('invisible');
}
function closeLightbox(){
    lightbox.classList.add('invisible');
}
function openlightbox(){
    lightbox.classList.remove('invisible');
}
function addItem() {
    if(amountvalue > 0){
        const total =  125.00 * amountvalue ;
        wrp.classList.remove('empty');
        wrp.innerHTML = 
        `<div class="product">
        <div class="product-info">
        <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
        <div class="product-title">
        <p>Fall Limited Edition Sneakers</p>
        </div>
        <p id="product__num"><span>$125.00</span><span class="number">${amountvalue}</span> <b class = "total">$${total}</b></p>
        <button class = "delete-btn" onclick= "deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
    
        
        <button class = "checkout-btn">Checkout</button>
        
        </div>
       
    

        `;
        indicator.style.display = 'block';
        indicator.innerText = amountvalue;

    }
    
    }
    function deleteItem(){
        wrp.classList.add('empty');
        wrp.innerHTML = `<p>Your cart is empty</P>`;
        indicator.style.display= 'none';
    }
    document.addEventListener('DOMContentLoaded', () => {
    images.forEach((image)=>{
        image.addEventListener('click', ()=>{
            const lastimage = document.querySelectorAll('.selected');
            if(lastimage) {
                lastimage[0].classList.remove('selected');
            }
            image.classList.add("selected");
            const selectedimg = document.querySelector(".selected");
            switch(selectedimg.getAttribute("src")){
                case "./images/image-product-1-thumbnail.jpg":
                    mainThumbnail.src ="./images/image-product-1.jpg";
                    mainthumbnaillightbox.src = "./images/image-product-1.jpg";
                    break;
                case "./images/image-product-2-thumbnail.jpg":
                    mainThumbnail.src ="./images/image-product-2.jpg";
                    mainthumbnaillightbox.src = "./images/image-product-2.jpg";
                    break;
                case "./images/image-product-3-thumbnail.jpg":
                    mainThumbnail.src ="./images/image-product-3.jpg";
                    mainthumbnaillightbox.src ="./images/image-product-3.jpg";
                    break;
                case "./images/image-product-4-thumbnail.jpg":
                    mainThumbnail.src ="./images/image-product-4.jpg";
                    mainthumbnaillightbox.src = "./images/image-product-4.jpg";
                    break;
            }
        });    
    });
});

    menulogo.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    plusBtn.addEventListener('click', handleplusBtn);
    minusBtn.addEventListener('click', handleminusBtn);
    nextBtn.addEventListener('click', nextImage);
    previousBtn.addEventListener('click', previousImage);
    nxtBtn.addEventListener('click', nxtImage);
    prevBtn.addEventListener('click', prevImage);
    cartBtn.addEventListener('click', toggleCart);
    closeLightboxBtn.addEventListener('click', closeLightbox);
    mainThumbnail.addEventListener('click', openlightbox);
    addbtn.addEventListener('click', addItem);
    