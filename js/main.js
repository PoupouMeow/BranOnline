const pfp = document.querySelector("#profile-picture");

pfp.addEventListener("click", () => {
    pfp.classList.toggle("spin");
    setTimeout(() => {
        pfp.classList.remove("spin");
    }, 1500);
});