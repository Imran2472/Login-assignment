let menu_bar = document.querySelector(".menu-bar");
let close = document.querySelector(".close_bar i");
let navbar = document.querySelector(".navbar");

// show navbar ----
menu_bar.addEventListener("click", function () {
  navbar.classList.add("show");
});
// close navbar ----
close.addEventListener("click", function () {
  navbar.classList.remove("show");
  alert;
});

// --------------cart show code --------------
let cartShoping = document.querySelector("#cart");
let closeCart = document.querySelector(".close_cart i");
let cart = document.querySelector("#add-to-cart");

cartShoping.addEventListener("click", function () {
  cart.classList.add("show");
});
closeCart.addEventListener("click", function () {
  cart.classList.remove("show");
});

let leftSlide = document.querySelector("#left");
let rightSlid = document.querySelector("#right");
let rightPignation = document.querySelector(".swiper-button-next");
let leftPignation = document.querySelector(".swiper-button-prev");

leftSlide.addEventListener("click", function () {
  leftPignation.click();
});

rightSlid.addEventListener("click", function () {
  rightPignation.click();
});

// -----------------button filter section----------------------
let buttons = document.querySelectorAll(".filter_buttons .buttons");
let col_filter = document.querySelectorAll(".col_product");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    buttons.forEach((btns) => {
      btns.classList.remove("active");
    });
    btn.classList.add("active");

    col_filter.forEach((col) => {
      if (col.classList.contains(btn.id)) {
        col.classList.add("show");
      } else {
        col.classList.remove("show");
      }
    });
  });
});

// contdown start funtion
let Timedays = document.querySelectorAll(".col_timer .timer_main .boxes .box");

function CountDown() {
  for (let i = 0; i < Timedays.length; i++) {
    let FutureDate = new Date("27 may 2024");
    let NewDate = new Date();
    let myDate = FutureDate - NewDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;

    Timedays[0].innerHTML = days;
    Timedays[1].innerHTML = hours;
    Timedays[2].innerHTML = minutes;
    Timedays[3].innerHTML = seconds;

    Timedays[4].innerHTML = days;
    Timedays[5].innerHTML = hours;
    Timedays[6].innerHTML = minutes;
    Timedays[7].innerHTML = seconds;
  }
}
CountDown();
setInterval(() => {
  CountDown();
}, 1000);

// swiper-slide-next
// ---------------slider hero down slider --------------
let swiper = new Swiper(".hero_down_slider", {
  slidesPerView: 6,
  spaceBetween: 15,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  },
});

// product slider

let Proswiper = new Swiper(".product_swip", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

let RightPig = document.querySelector(".product_swip .swiper-button-next");
let LeftPig = document.querySelector(".product_swip .swiper-button-prev");
let Leftpro = document.querySelector("#pro_left");
let Rightpro = document.querySelector("#pro_right");

Leftpro.addEventListener("click", function () {
  LeftPig.click();
});

Rightpro.addEventListener("click", function () {
  RightPig.click();
});

// ---add to cart function ---

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // ------Remove Trash Btn -------
  let cart_delet = document.querySelectorAll(".trash i");
  for (let i = 0; i < cart_delet.length; i++) {
    let rem = cart_delet[i];
    rem.addEventListener("click", removeCartItem);
  }

  let Quantity = document.querySelectorAll("#input");
  Quantity.forEach((quant) => {
    quant.addEventListener("change", ChangeQuantity);
  });
  // ---------add to cart -------------
  let shop_icon = document.querySelectorAll(".shop_icon i");
  shop_icon.forEach((cart) => {
    cart.addEventListener("click", addtocartitem);
  });
  LocadSavedItemToCart();
  SavedItemInLocal();
}

function removeCartItem(event) {
  let eent = event.target;
  let Parent = eent.parentElement.parentElement;
  Parent.remove();
  UpdateTotal();
  SavedItemInLocal();
}

function ChangeQuantity(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0 || input === "") {
    input.value = 1;
  }
  UpdateTotal();
  SavedItemInLocal();
}

function addtocartitem(event) {
  let button = event.target;
  let ParentCol =
    button.parentElement.parentElement.parentElement.parentElement;
  let title = ParentCol.querySelector(".title").innerText;
  let price = ParentCol.querySelector(".price_product .price_pro").innerText;
  let Img = ParentCol.querySelector(".product_img img").src;
  let Quantity = ParentCol.querySelector(".input input");
  addproductCart(title, price, Img, Quantity);
  UpdateTotal();
  SavedItemInLocal();
}

function addproductCart(title, price, Img, Quantity) {
  let CartPro = document.createElement("div");
  CartPro.classList.add("cart_col");
  CartPro.classList.add("d-flex");
  CartPro.classList.add("gap-1");
  CartPro.classList.add("justify-content-between");
  let cart_container = document.querySelector(".cart_container");
  let titleCart = cart_container.querySelectorAll(".cart_title");
  for (let i = 0; i < titleCart.length; i++) {
    let titles = titleCart[i];
    if (titles.textContent == title) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have aleardy select this item Please check the cart!",
      });
      return;
    }
  }

  let CartBoxes = `
  <div class="image width_div"><img src="${Img}" alt=""></div>

  <div class="cart_info width_div">
    <div class="cart_title">${title}</div>
    <div class="cart_price">${price}</div>
    <div class="input"><input type="number" name="number" id="number" value="1" onclick="ChangeQuantity(event)"></div>
  </div>

  <div class="trash width_div"><i class="fa-solid fa-trash" onclick="removeCartItem(event)"></i></div>
  `;
  CartPro.innerHTML = CartBoxes;
  cart_container.append(CartPro);
  SavedItemInLocal();
  cartShoping.click();
}

function UpdateTotal() {
  let container_cart = document.querySelector(".cart_container");
  let cart_col = container_cart.querySelectorAll(".cart_col ");
  let total = 0;
  let count = 0;
  for (let i = 0; i < cart_col.length; i++) {
    let boxes = cart_col[i];
    let Cart_price = boxes.querySelector(".cart_price");
    let input = boxes.querySelector(".input input");
    let price = parseFloat(Cart_price.textContent.replace("$", ""));
    let quantity = input.value;
    total += price * quantity;
  }
  let TotalPrice = document.querySelector(".total");
  total = Math.round(total * 100) / 100;
  TotalPrice.innerHTML = "$" + total;
  localStorage.setItem("cartTotal", total);
}

// keep item in cart ----
function SavedItemInLocal() {
  let Container_pro = document.querySelector(".cart_container");
  let Car_boxess = Container_pro.querySelectorAll(".cart_col");
  let SavedArry = [];

  for (let i = 0; i < Car_boxess.length; i++) {
    let Boxess = Car_boxess[i];
    let title = Boxess.querySelector(".cart_title");
    let price = Boxess.querySelector(".cart_price");
    let quantity = Boxess.querySelector(".input input");
    let Image = Boxess.querySelector(".image img").src;
    let Pro_obj = {
      title_car: title.innerText,
      Price_car: price.innerText,
      Quantity_car: quantity.value,
      Imgs_car: Image,
    };
    SavedArry.push(Pro_obj);
  }
  localStorage.setItem("SavedArry", JSON.stringify(SavedArry));
}

function LocadSavedItemToCart() {
  let SavedArry = localStorage.getItem("SavedArry");
  if (SavedArry) {
    SavedArry = JSON.parse(SavedArry);

    for (let i = 0; i < SavedArry.length; i++) {
      let Item = SavedArry[i];
      addproductCart(Item.title_car, Item.Price_car, Item.Imgs_car);
      let CartBox = document.querySelectorAll(".cart_col");
      let Boxee = CartBox[CartBox.length - 1];
    }
  }

  let CartTotal = localStorage.getItem("cartTotal");
  if (CartTotal) {
    document.querySelector(".total").innerText = "$" + CartTotal;
  }
}

// page animation
AOS.init({
  offset: 160, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
});

function animatedText() {
  gsap.from(".hero_title", {
    y: 100,
    opacity: 0,
    delay: 0.6,
    duration: 1,
    stagger: 0.3,
  });
}
animatedText();

let loading = document.querySelector("#loading");
window.addEventListener("load", function () {
  loading.style.display = "none";
});

let nextBtn = document.querySelectorAll(".next");

nextBtn.forEach((next) => {
  next.addEventListener("click", () => {
    nextBtn.forEach((nex) => {
      nex.classList.remove("color");
    });
    next.classList.add("color");
  });
});

// dashboard
let account_button = document.querySelectorAll(".account_button");
let account_boxess = document.querySelectorAll(".account_col .content .boxes");

account_button.forEach((next) => {
  next.addEventListener("click", (dets) => {
    account_button.forEach((nex) => {
      nex.classList.remove("active");
    });
    next.classList.add("active");

    account_boxess.forEach((box) => {
      if (box.classList.contains(next.id)) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
  });
});

// -----form login and sign up ----

let creat_account = document.querySelector("#creat");
let have_acc = document.querySelector("#allerady");
let creat_form = document.querySelector(".signup");
let logform = document.querySelector(".login");
console.log(creat_account, have_acc);
function formShow() {
  creat_account.addEventListener("click", function () {
    creat_form.classList.add("show");
    logform.classList.add("hide");
  });
  have_acc.addEventListener("click", function () {
    creat_form.classList.remove("show");
    logform.classList.remove("hide");
  });
}
formShow();
let pass_eye = document.querySelectorAll(".eye i");
let password = document.querySelectorAll(".password_input");

pass_eye.forEach((eye) => {
  eye.addEventListener("click", function () {
    password.forEach((pass) => {
      if (pass.type === "password") {
        pass.type = "text";
        eye.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        pass.type = "password";
        eye.classList.replace("fa-eye", "fa-eye-slash");
      }
    });
  });
});

let productAll = document.querySelectorAll(".col_product");

console.log(productAll);
