import { getImages } from "./js/pixabay-API";
import { renderImages } from "./js/render-functions";
import { showLoader, hideLoader, showMessage } from "./js/modules/helpers";

const formEl = document.querySelector(".search-form")

formEl.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(e){
    e.preventDefault();
    showLoader()

    const userValue = e.target.elements.data.value.trim().split(" ")
    const userWord = userValue.filter(word => word).join('+');

    getImages(userWord).then(res => {
        const imageArray = [...res.hits];
        if (imageArray.length === 0) {
            hideLoader();
            showMessage();
        } else {
            renderImages(imageArray)
        }
    }).catch(console.log).finally(() => {
        hideLoader()
    })

    e.target.reset()
};




