document.addEventListener("DOMContentLoaded", (event) => {
    let index = 0;
    const left = document.querySelector(".arrow.left");
    const right = document.querySelector(".arrow.right");
    const picture = document.querySelector("#photo");
    const pictureText = document.querySelector(".product__name");
    const slideImagearray = [{
        "img": "images/frontpage-images/hifi-primaluna.png",
        text: "Primaluna Sounds",
    }, {
        "img": "produktbilleder/effektforstaerkere/manley_mahi.jpg",
        text: "GRADO",
    }, {
        "img": "produktbilleder/dvdafspillere/creek_classic.jpg",
        text: "Sennheiser",
    }, {
        "img": "produktbilleder/forforstaerkere/Creek_OBH_22_Passive_Preamp.jpg",
        text: "Sugden"
    }];
    function changeImage(event) {
        console.log(event.target.classList.value)
        if (event.target.classList.value == "fas fa-chevron-right") {
            if (index < slideImagearray.length - 1) {
                index++;
            } else {
                index = 0
            }
        }
        if (event.target.classList.value == "fas fa-chevron-left") {
            if (index > 0) {
                index--
            } else {
                index = slideImagearray.length - 1

            }
        }
        console.log(index)
        picture.setAttribute("src", `${slideImagearray[index].img}`);
        pictureText.textContent = slideImagearray[index].text;
    }
    left.addEventListener("click", changeImage);
    right.addEventListener("click", changeImage);
    picture.style.height = "100%"
    picture.style.width = "100%"

})
