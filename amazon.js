import { todayDeal } from "./todayDeal.js"
console.log(todayDeal);

let slideBtnLeft = document.getElementById("slider-btn-left");
let slideBtnRight = document.getElementById("slider-btn-right");

let imgItem = document.querySelectorAll(".image-item");

console.log(imgItem.length-1);

let startSlider = 0;
let endSlider = (imgItem.length-1) * 100; //700

slideBtnLeft.addEventListener("click",()=>{
    if(startSlider < 0)
        {
            startSlider = startSlider + 100;
        }
    
       
        imgItem.forEach(element =>{
            element.style.transform = `translateX(${startSlider}%)`;
        })
})

slideBtnRight.addEventListener("click",()=>{
    if(startSlider >= -endSlider+100)
    {
        startSlider = startSlider - 100;
    }

   
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
})

// slidebar

const sidebarNavigationEl = document.getElementById("sidebar-container-navigation");
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close");

sidebarOpenNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show");
})

sidebarCloseNavigationEl.addEventListener("click",()=>{
    sidebarNavigationEl.classList.toggle("slidebar-show");
})


//Today deals

console.log(todayDeal)
let todayDealProductList = document.querySelector(".deal-product-list");
// console.log(todayDealProductList);

var todayDealProductHTML = "";

let todayDealLength = todayDeal.length;
for(let i = 0 ; i < todayDealLength ; i++){
    // console.log(todayDeal[i])

    todayDealProductHTML += `
             <div class="deal-product-item">
                    <div class="todayDeal-product-img">
                        <img src=${todayDeal[i].img}>
                        </div>
                
                <div class="discount">
                    <a href="#">Up to${todayDeal[i].discount}% off</a>
                    <a href="#">${todayDeal[i].DealofDay }</a>
                </div>
                <br><p>${todayDeal[i].disc}</p>
            </div>
    `
}

todayDealProductList.innerHTML = todayDealProductHTML;
// console.log(todayDealProductHTML)

let todayPrevBtn = document.getElementById("today-prev");
let todayNextBtn = document.getElementById("today-next");
let todayDealProductItem = document.querySelectorAll(".deal-product-item")

let startProduct = 0;

todayPrevBtn.addEventListener("click",()=>{   
    if(startProduct < 0)
        {
            startProduct += 500;
        }
    
    if(startProduct > -2000)
    {
        todayDealProductItem.forEach(el =>{
            el.style.transform = `translateX(${startProduct}%)`
        })
    }
})

todayNextBtn.addEventListener("click", () => {
    
    if(startProduct > -1500){
        startProduct -= 500;
    }
     
 
   todayDealProductItem.forEach(el => {
        el.style.transform = `translateX(${startProduct}%)`
    }) 
})