/* Language Debug */

const userLang = navigator.language
console.log (userLang)

/* Make touch targets work. */

const wrapper = document.getElementsByClassName("input_wrapper")
const button = document.getElementsByClassName("input")

wrapper.addEventListener('click', (event) => {
    if (event.target === wrapper) {
        button.click()
    }
})