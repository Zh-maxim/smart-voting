let more = document.getElementById("biggest")
let photo1 = document.getElementById("img1")
let score1 = document.getElementById("score1")
let photo2 = document.getElementById("img2")
let score2 = document.getElementById("score2")
let photo3 = document.getElementById("img3")
let score3 = document.getElementById("score3")
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let nmbs1 = 0;
let nmbs2 = 0;
let nmbs3 = 0;
score1.innerHTML = "<p class=\"styleofscore\">" + nmbs1 + "</p>"
score2.innerHTML = "<p class=\"styleofscore\">" + nmbs2 + "</p>"
score3.innerHTML = "<p class=\"styleofscore\">" + nmbs3 + "</p>"
photo1.onclick = function () {
    nmbs1++;
    score1.innerHTML = "<p class=\"styleofscore\">" + nmbs1 + "</p>"
    if (nmbs1 > nmbs2 && nmbs1 > nmbs3 && nmbs2 > nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = 1 + "s"
        second.style.transitionDuration = 1 + "s"
        third.style.transitionDuration = 1 + "s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs3 && nmbs2 > nmbs1 && nmbs3 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 0 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs2 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 256 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 > nmbs3 && nmbs1 > nmbs2 && nmbs3 > nmbs2) {
        first.style.top = 0 + "px"
        second.style.top = 502 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs1 && nmbs2 > nmbs3 && nmbs1 > nmbs3) {
        first.style.top = 256 + "px"
        second.style.top = 0 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs1 > nmbs2) {
        first.style.top = 256 + "px"
        second.style.top = 502 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 > nmbs2 && nmbs1 > nmbs3 && nmbs2 == nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs1 && nmbs2 > nmbs3 && nmbs1 == nmbs3) {
        first.style.top = 256 + "px"
        second.style.top = 0 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs1 == nmbs2) {
        first.style.top = 502 + "px"
        second.style.top = 256 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 == nmbs2 && nmbs2 > nmbs3 && nmbs1 > nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 == nmbs3 && nmbs2 > nmbs1 && nmbs3 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 0 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 == nmbs3 && nmbs1 > nmbs2 && nmbs3 > nmbs2) {
        first.style.top = 0 + "px"
        second.style.top = 502 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
}
photo2.onclick = function () {
    nmbs2++;
    score2.innerHTML = "<p class=\"styleofscore\">" + nmbs2 + "</p>"
    if (nmbs1 > nmbs2 && nmbs1 > nmbs3 && nmbs2 > nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs3 && nmbs2 > nmbs1 && nmbs3 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 0 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs2 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 256 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 > nmbs3 && nmbs1 > nmbs2 && nmbs3 > nmbs2) {
        first.style.top = 0 + "px"
        second.style.top = 502 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs1 && nmbs2 > nmbs3 && nmbs1 > nmbs3) {
        first.style.top = 256 + "px"
        second.style.top = 0 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs1 > nmbs2) {
        first.style.top = 256 + "px"
        second.style.top = 502 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 > nmbs2 && nmbs1 > nmbs3 && nmbs2 == nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs1 && nmbs2 > nmbs3 && nmbs1 == nmbs3) {
        first.style.top = 256 + "px"
        second.style.top = 0 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs1 == nmbs2) {
        first.style.top = 502 + "px"
        second.style.top = 256 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 == nmbs2 && nmbs2 > nmbs3 && nmbs1 > nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 == nmbs3 && nmbs2 > nmbs1 && nmbs3 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 0 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 == nmbs3 && nmbs1 > nmbs2 && nmbs3 > nmbs2) {
        first.style.top = 0 + "px"
        second.style.top = 502 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
}
photo3.onclick = function () {
    nmbs3++;
    score3.innerHTML = "<p class=\"styleofscore\">" + nmbs3 + "</p>"
    if (nmbs1 > nmbs2 && nmbs1 > nmbs3 && nmbs2 > nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs3 && nmbs2 > nmbs1 && nmbs3 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 0 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs2 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 256 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 > nmbs3 && nmbs1 > nmbs2 && nmbs3 > nmbs2) {
        first.style.top = 0 + "px"
        second.style.top = 502 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs1 && nmbs2 > nmbs3 && nmbs1 > nmbs3) {
        first.style.top = 256 + "px"
        second.style.top = 0 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs1 > nmbs2) {
        first.style.top = 256 + "px"
        second.style.top = 502 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 > nmbs2 && nmbs1 > nmbs3 && nmbs2 == nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 > nmbs1 && nmbs2 > nmbs3 && nmbs1 == nmbs3) {
        first.style.top = 256 + "px"
        second.style.top = 0 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs3 > nmbs1 && nmbs3 > nmbs2 && nmbs1 == nmbs2) {
        first.style.top = 502 + "px"
        second.style.top = 256 + "px"
        third.style.top = 0 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 == nmbs2 && nmbs2 > nmbs3 && nmbs1 > nmbs3) {
        first.style.top = 0 + "px"
        second.style.top = 256 + "px"
        third.style.top = 502 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs2 == nmbs3 && nmbs2 > nmbs1 && nmbs3 > nmbs1) {
        first.style.top = 502 + "px"
        second.style.top = 0 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
    if (nmbs1 == nmbs3 && nmbs1 > nmbs2 && nmbs3 > nmbs2) {
        first.style.top = 0 + "px"
        second.style.top = 502 + "px"
        third.style.top = 256 + "px"
        first.style.transitionDuration = "1s"
        second.style.transitionDuration = "1s"
        third.style.transitionDuration = "1s"
        first.style.transitionTimingFunction = "ease-out"
        second.style.transitionTimingFunction = "ease-out"
        third.style.transitionTimingFunction = "ease-out"
    }
}