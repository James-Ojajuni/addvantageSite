document.getElementById("menu").addEventListener("click",
    () => {
        document.querySelector(".sidebar").style.display = "inline-flex";
        document.getElementById("menu").style.display = "none";
    }
)

document.querySelector(".close").addEventListener("click",
    () => {
        document.querySelector(".sidebar").style.display = "none";
        document.getElementById("menu").style.display = "flex";
    }
)