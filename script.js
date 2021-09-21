const elBlock = document.querySelector(".description");
const elToggle = document.querySelector(".btn")
elToggle.addEventListener("click", () => {
    elToggle.classList.toggle('active');
    if (elBlock.style.height === "0px" || elBlock.style.height === "") {
        elBlock.style.height = `${elBlock.scrollHeight}px`
    } else {
        elBlock.style.height = `${elBlock.scrollHeight}px`;
        window.getComputedStyle(elBlock, null).getPropertyValue("height");
        elBlock.style.height = "0";
    }
});
elBlock.addEventListener("transitionend", () => {
    if (elBlock.style.height !== "0px") {
        elBlock.style.height = "auto"
    }
});
window.onresize = function (event) {
    if (event.target.innerWidth > 767) {
        elBlock.style.height = "";
        elToggle.classList.value = 'btn';
    } 
};
