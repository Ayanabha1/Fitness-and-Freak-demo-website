

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let navbar = document.querySelector(".navbar");
  let top = document.querySelector(".gototop");

  navbar.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky", window.scrollY > 0);

  if (scrollY > 500) {
    top.style.display = "block";
    if (!top.classList.contains("top_entrance")) {
      top.classList.add("top_entrance");
      top.classList.remove("top_exit");
    }
  } else {
    if (!top.classList.contains("top_exit")) {
      top.classList.remove("top_entrance");
      top.classList.add("top_exit");
    }
  }
});

let burger = document.querySelector(".burger");
// let body = document.querySelector("body");
burger.addEventListener("click", hamburger);

let nav_li = document.querySelectorAll('.nav_elems');
nav_li.forEach(i => {
  i.addEventListener('click',nav_li_func);
});

function nav_li_func() {
  burger.click();
}

function hamburger() {
  let navbar = document.querySelector(".navbar");
  let line1 = document.querySelector('#line1');
  let line2 = document.querySelector('#line2');
  let line3 = document.querySelector('#line3');
  let navcontainer = document.querySelector(".navcontainer");
  navcontainer.classList.toggle("navcontainer_vis_res");
  navbar.classList.toggle("navbar_h_res");
  navbar.classList.toggle("navbar_h_res_op");
  line1.classList.toggle('line1_res');
  line2.classList.toggle('line2_res');
  line3.classList.toggle('line3_res');
}

window.addEventListener("scroll", () => {
  let nav_items = document.querySelectorAll(".nav_items");
  let sections = document.querySelectorAll("section");
  let current = "";
  sections.forEach((section) => {
    let sec_top = section.offsetTop;
    let sec_height = section.clientHeight;
    if (pageYOffset > sec_top - sec_height / 3 && pageYOffset > 0) {
      current = section.getAttribute("id");
    }
  });
  // console.log(current);
  nav_items.forEach((li) => {
    li.classList.remove("nav_li_res");

    if (li.classList.contains(current)) {
      li.classList.add("nav_li_res");
    }
  });
});



function clicked(){
  swal("Good job!", "Thanks for submitting your response", "success");
}