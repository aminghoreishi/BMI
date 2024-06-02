let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let lab1 = document.querySelector(".lab1");
let lab2 = document.querySelector(".lab2");

let click = document.querySelector(".click");

let spanNum = document.querySelector(".num");
let p = document.querySelector(".p");
let modal = document.querySelector(".modal");
let tehme = document.querySelector(".tehme");
let kol = document.querySelector('.kol')
let x = document.querySelector('.x')
let ok = document.querySelector('.ok')
tehme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.className.includes("dark")) {
    localStorage.setItem("todo", "dark");
  } else {
    localStorage.setItem("todo", "light");
  }
});

window.addEventListener("load", () => {
  let get = localStorage.getItem("todo");
  if (get === "dark") {
    document.documentElement.classList.add("dark");
  }
});
weight.addEventListener("keydown", (e) => {
  lab1.style.top = "-9px";

  if (weight.value.length === "") {
    lab1.style.top = "9px";
  }
});

weight.addEventListener("blur", (e) => {
  if (e.target.value) {
    lab1.style.top = "-9px";
  } else {
    lab1.style.top = "9px";
  }
});
height.addEventListener("keydown", (e) => {
  lab2.style.top = "-9px";

  if (height.value.length === "") {
    lab2.style.top = "9px";
  }
});

height.addEventListener("blur", (e) => {
  if (e.target.value) {
    lab2.style.top = "-9px";
  } else {
    lab2.style.top = "9px";
  }
});

click.addEventListener("click", () => {
  let valw = weight.value;
  let valh = height.value;
  if (valw > 20 && valw < 200) {
    let tag = valh / 100;
    modal.classList.remove("hidden");
    let col = valw / (tag * tag);
    kol.style.filter = 'blur(10px)'
    if (col < 18.5) {
      p.innerHTML = "Bad";
      p.style.color = "red";
    } else if (col >= 19 && col <= 26) {
      p.innerHTML = "Good";
      p.style.color = "green";
    } else if (col > 27 && col < 29) {
      p.innerHTML = "Overweight";
      p.style.color = "orange";
    } else {
      p.innerHTML = "Fat";
      p.style.color = "red";
    }
    spanNum.innerHTML = col.toFixed(1);
  } else {
    window.alert('Please send the correct number')
  }
  // if (valh > 120 && valh < 300) {
  //   alert('sss')
  // }
  // else {
  //   alert('opopo')
  // }
});

x.addEventListener('click' , () => {
  modal.classList.add('hidden')
  kol.style.filter = 'blur(0px)'
})
ok.addEventListener('click' , () => {
  modal.classList.add('hidden')
  kol.style.filter = 'blur(0px)'
})