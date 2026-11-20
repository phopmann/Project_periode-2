console.log("Script loaded")

let modalBox = document.getElementById("modalbox");

function showModal() {
    if (getCookie("cookiesAccepted") !== "true") {
        setTimeout(() => {
            modalBox.style.display = "block";
        }, 1000);
    }
}

function closeModal() {
    modalBox.style.display = "none";
}

function acceptCookies() {
    let expirationDate = new Date();

    expirationDate.setDate(expirationDate.getDate() + 30);

    document.cookie = "cookiesAccepted=true; expires=" + expirationDate.toUTCString() + "; path=/";

    console.log("Cookie opgeslagen:", document.cookie);

    closeModal();
}

function getCookie(name) {
    let cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split("=");

        if (key === name) {
            return value;
        }
    }

    return null;
}