const productcontainers=[...document.querySelectorAll('.product-container')];
const nxtbtn=[...document.querySelectorAll('.next-button')];
const prebtn=[...document.querySelectorAll('.pre-button')];

productcontainers.forEach((item,i)=>{
let containerdimention=item.getBoundingClientRect();
let containerwidth=containerdimention.width;
nxtbtn[i].addEventListener('click',()=>{
    item.scrollLeft +=containerwidth;
})
prebtn[i].addEventListener('click',()=>{
    item.scrollLeft -=containerwidth;
})
 console.log(containerdimention);
})


const productImages=document.querySelectorAll('.product-images img');
console.log(productImages)
const productImageslider=document.querySelector('.image-slider');
console.log(productImageslider)
 let activeimageslid=0;

 productImages.forEach((item, i)=>{
    item.addEventListener('click',()=>{
        productImages[activeimageslid].classList.remove('active');
        item.classList.add('active');
        productImageslider.style.backgroundImage=`url('${item.src}')`
        activeimageslid=i;
    })
 })

 // togggle button of 

 const sizebtn=document.querySelectorAll('.size-radio-btn');
 let checkbtn =0;

 sizebtn.forEach((item, i)=>{
    item.addEventListener('click',()=>{
        sizebtn[checkbtn].classList.remove('check');
        item.classList.add('check');
        checkbtn=i;
    })
 })
 