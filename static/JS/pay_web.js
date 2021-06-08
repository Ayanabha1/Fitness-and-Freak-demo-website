if (window.location.href.indexOf("paypage") > -1) {
  let url = JSON.stringify(window.location.href);
  let c = url.search("#");
  let current_page_id = url.slice(c + 1, url.length - 1);

  let curr = document.getElementById(current_page_id);

  curr.classList.toggle("pay_membership_plans_container_clicked");
  curr.getElementsByTagName("div")[2].classList.toggle("pay_form_clicked");
}

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  let pay_navbar = document.querySelector(".pay_navbar");

  pay_navbar.classList.toggle("sticky", window.scrollY > 0);
  header.classList.toggle("sticky", window.scrollY > 0);
});

let burger = document.querySelector(".burger");
// let body = document.querySelector("body");
burger.addEventListener("click", hamburger);

let pay_nav_li = document.querySelectorAll(".pay_nav_elems");
pay_nav_li.forEach((i) => {
  i.addEventListener("click", nav_li_func);
});

function nav_li_func() {
  burger.click();
}

function hamburger() {
  let pay_navbar = document.querySelector(".pay_navbar");
  let line1 = document.querySelector("#line1");
  let line2 = document.querySelector("#line2");
  let line3 = document.querySelector("#line3");
  let pay_navcontainer = document.querySelector(".pay_navcontainer");
  pay_navcontainer.classList.toggle("pay_navcontainer_vis_res");
  pay_navbar.classList.toggle("pay_navbar_h_res");
  pay_navbar.classList.toggle("pay_navbar_h_res_op");
  line1.classList.toggle("line1_res");
  line2.classList.toggle("line2_res");
  line3.classList.toggle("line3_res");
}
let pm_btn = document.querySelectorAll(".pm_btn");
let p_st = document.querySelector("#p_st");
let p_pr = document.querySelector("#p_pr");
let p_el = document.querySelector("#p_el");
let pay_form = document.querySelector(".pay_form");

let pay_cont = document.querySelectorAll(".pay_membership_plans_container");
pay_cont.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    pay_cont.forEach((j) => {
      if (j.classList.contains("pay_membership_plans_container_clicked")) {
        j.classList.toggle("pay_membership_plans_container_clicked");
        j.getElementsByTagName("div")[2].classList.toggle("pay_form_clicked");
      }
    });

    if (!i.classList.contains("pay_membership_plans_container_clicked")) {
      i.classList.toggle("pay_membership_plans_container_clicked");
      i.getElementsByTagName("div")[2].classList.toggle("pay_form_clicked");
    }
  });
});

// pay_cont.forEach(i => {
//   if (i.classList.contains('pay_membership_plans_container_clicked')) {
//     let btn = i.querySelector(`#p_${i.id}`);
//     btn.addEventListener('click',(e)=> {
//       e.preventDefault();
//       console.log(btn);
//       // alert("opened button clicked")
//     })

//   }
// });

pm_btn.forEach((i) => {
  let btn_id = i.id.slice(2);
  console.log(btn_id);
  i.addEventListener("click", () => {
    pay_cont.forEach((j) => {
      if (j.classList.contains("pay_membership_plans_container_clicked")) {
        if (j.id == btn_id) {
          alert("Button clicked");
        }
      }
    });
  });
});

