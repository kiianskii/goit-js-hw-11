
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector(".loader")


    const msgOptions = {
        message: "Sorry, there are no images matching your search query. Please try again!",
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#fff',

        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',

        theme: 'dark',
        position: 'topRight',
        class: 'message',
    };


export function showLoader(container) {
    loader.classList.remove("is-hide")
}

export function hideLoader(container) {
    loader.classList.add("is-hide")

}
export function showMessage() {
    iziToast.show(msgOptions);
}

