const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
    navbar.classList.add("scrolled");
    console.log("scrolled")
     } else {
    navbar.classList.remove("scrolled");
    console.log("unscrollled")
    }
});

function playVideo() {
    const btn = document.querySelector(".playBtn");
    const video = document.querySelector(".heroVideo");
    if (video.paused) {
        video.play();
        btn.classList.add("playing")
        btn.classList.remove("paused")
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M525-200v-560h235v560H525Zm-325 0v-560h235v560H200Zm385-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z"/></svg>`;
        } else {
        btn.classList.add("paused")
        btn.classList.remove("playing")
        video.pause();
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"/></svg>`;
    }
}

function toggleDropdown() {
    event.stopPropagation();
    const dropdownContent = document.querySelector('.dropdownContent');
    dropdownContent.classList.toggle('visible');
}
function hideDropdown() {
    const dropdownContent = document.querySelector('.dropdownContent');
    dropdownContent.classList.remove('visible');
}