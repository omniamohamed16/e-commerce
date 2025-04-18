// opening and closing side nav//
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener("click", function (e) {
  e.stopPropagation();

  if (
    e.target.className !== "l1" &&
    e.target.className !== "three-lines" &&
    e.target.className !== "Mills-title" &&
    e.target.className !== "menu-content"
  ) {
    document.getElementById("mySidenav").style.width = "0";
  }
});

menuLinks = document.querySelectorAll(".vertical-menu a");

menudiv = document.querySelectorAll(".menu-content div");

menudiv.forEach((element) => {
  element.onclick = function (e) {
    e.stopPropagation();
  };
});

menuLinks.forEach((element) => {
  element.onclick = function (e) {
    e.stopPropagation();
  };
});

// hover over links in side nav

womenSection = document.querySelector(".collapse-women-section");
womenContent = document.querySelector(".women-content");

womenSection.onmouseover = function (e) {
  e.stopPropagation();
};
womenContent.onmouseover = function (e) {
  e.stopPropagation();
};

womenSection.addEventListener("mouseover", (e) => {
  if (
    (e.target.className == "women-content",
    e.target.className == "collapse-women-section")
  ) {
    womenContent.style.display = "block";
    menContent.style.display = "none";

  } else {
    womenContent.style.display = "none";
  }
});

window.addEventListener("mouseover", (e) => {
  if (e.target.className !== "women-content") {
    womenContent.style.display = "none";
  }
});


menSection = document.querySelector(".collapse-men-section");
menContent = document.querySelector(".men-content");

menSection.addEventListener("mouseover", (e) => {
  if (
    (e.target.className == "men-content",
    e.target.className == "collapse-men-section")
  ) {
    menContent.style.display = "block";
    womenContent.style.display = "none";
  } else {
    menContent.style.display = "none";
  }
});

menSection.onmouseover = function (e) {
  e.stopPropagation();
};
menContent.onmouseover = function (e) {
  e.stopPropagation();
};

window.addEventListener("mouseover", (e) => {
  if (e.target.className !== "men-content") {
    menContent.style.display = "none";
  }
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
