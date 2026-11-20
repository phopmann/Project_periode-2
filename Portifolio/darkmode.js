console.log("darkmode loaded")

document.addEventListener("DOMContentLoaded", function () {

    const themeSwitch = document.querySelector("#theme-switch");

    if (themeSwitch) {
        themeSwitch.addEventListener("click", function () {

            document.body.classList.toggle("darkmode");

            if (document.body.classList.contains("darkmode")) {
                localStorage.setItem("darkmode", "active");
            } else {
                localStorage.setItem("darkmode", "inactive");
            }

        });
    }

    if (localStorage.getItem("darkmode") === "active") {
        document.body.classList.add("darkmode");
    }

});