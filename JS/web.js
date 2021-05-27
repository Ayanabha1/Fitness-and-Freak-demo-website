let header = document.querySelector("header");
// let a = document.querySelectorAll(".nav_elems");

// header.addEventListener("click", function () {
//   let clicked = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (!a[i].classList.contains("nav_items_clicked")) {
//       a[i].addEventListener("click", () => {
//         a[i].classList.remove("nav_items_unclicked");
//         a[i].classList.add("nav_items_clicked");
//         clicked = i;
//         for (let j = clicked + 1; j < a.length; j++) {
//           if (a[j].classList.contains("nav_items_clicked")) {
//             a[j].classList.remove("nav_items_clicked");
//             a[j].classList.add("nav_items_unclicked");
//           }
//         }
//         for (let k = clicked - 1; k >= 0; k--) {
//           if (a[k].classList.contains("nav_items_clicked")) {
//             a[k].classList.remove("nav_items_clicked");
//             a[k].classList.add("nav_items_unclicked");
//           }
//         }
//       });
//     }
//   }
// });

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let navbar = document.querySelector(".navbar");
  let top = document.querySelector(".gototop");
  if (screen.width >= 730) {
    navbar.classList.toggle("sticky", window.scrollY > 0);
    header.classList.toggle("sticky", window.scrollY > 0);
  }

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

function hamburger() {
  let navbar = document.querySelector(".navbar");
  let navcontainer = document.querySelector(".navcontainer");
  navcontainer.classList.toggle("navcontainer_vis_res");
  navbar.classList.toggle("navbar_h_res");
}

window.addEventListener("scroll", () => {
  let nav_items = document.querySelectorAll('.nav_items');
  let sections = document.querySelectorAll("section");
  let current = "";
  sections.forEach((section) => {
    let sec_top = section.offsetTop;
    let sec_height = section.clientHeight;
    if ((pageYOffset > sec_top-sec_height /3) && (pageYOffset > 0)) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);
  nav_items.forEach((li) => {
    li.classList.remove("nav_li_res");

    if (li.classList.contains(current)) {
      li.classList.add("nav_li_res");

    }
  });
});
