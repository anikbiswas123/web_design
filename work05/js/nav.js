const CreateNav= () => {
    
    var Nav=document.querySelector('.navbar');
    Nav.innerHTML='<div class="nav">\
            <img src="img/dark-logo.png" class="brand-logo" alt="">\
            <div class="nav-item">\
                <div class="search">\
                    <input type="search" class="search-box" placeholder="search product ,Brand">\
                   <button type="button" class="search-btn">search</button>\
                </div>\
                <a href=""><img src="img/user.png" id="user-imge">\
                <div class="login-logout-popup hide">\
                <p class="account-info">login in as, name</p>\
                <button class="btn" id="user-btn">log out</button>\
                </div></a>\<a href="#"><img src="img/cart.png"></a>\
             </div>\
             </div>\
         <ul class="link-container">\
            <li class="list-item"><a href="#">Home</a></li>\
            <li class="list-item"><a href="#">Woman</a></li>\
            <li class="list-item"><a href="#">Man</a></li>\
            <li class="list-item"><a href="#">Kids</a></li>\
            <li class="list-item"><a href="#">Accessories</a></li>\
           </ul>\
        </div>\
    ';
   
}

CreateNav();


/** user login and log out popup */

const userImagebtn=document.querySelector('#user-imge');
const userpop=document.querySelector('.login-logout-popup');
const accountinfo=document.querySelector('.account-info');
const actionbtn=document.querySelector('#user-btn');

userImagebtn.addEventListener('click',()=>{
    userpop.classList.toggle('.hide')
})




