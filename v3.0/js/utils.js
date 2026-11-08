/* Language Debug */

const userLang = navigator.language;
console.log (userLang);

/* Make touch targets work. */

const wrapper = document.getElementsByClassName("input-wrapper");
const input = document.getElementsByClassName("input");

for (let i = 0; i < wrapper.length; i++) {
    input[i].addEventListener("click", (event) => {
        event.stopPropagation();
    });
    
    wrapper[i].addEventListener('click', (event) => {
    if (event.target === wrapper[i]) {
        input[i].focus();
        if (input[i].value.trim() !== "") {
            input[i].select();
        }
    }
})
}