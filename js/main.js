const boxes = document.querySelectorAll(".box");
const navItems = document.querySelectorAll(".nav-scroll");

let state;
let current;

const options = {
    root: null,
    threshold: 0,
    rootMarign: 0
 };

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        state = false;
        navItems.forEach(elem => {
            if(entry.isIntersecting && elem.text == entry.target.getAttribute("title")){
                state = true;
                current = elem;
            }
        });

        if(state) {
            $(".nav-scroll").parent().removeClass("active");
            $(current).parent().addClass("active");
        }
    });
}, options);

boxes.forEach(box => {
    observer.observe(box);
});

$(function () {
    $(document).on("click", ".nav-scroll", scrollToContent);
    $(document).on("mouseover", ".card-tit", addTitleColor);
    $(document).on("mouseout", ".card-tit", removeTitleColor);
});