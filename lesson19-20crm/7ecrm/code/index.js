import { isAuthorization, validate } from "./functions.js"
import { loginNow, passwordNow } from "./data.js"
import {showVideos} from "./videoHost.js";

isAuthorization();

try {
    const elLogin = document.querySelector("input[data-type='login']");
    const elPassword = document.querySelector("input[data-type='password']");
    const elLog = document.querySelector("button[data-type='log']");
    //events
    elLogin.addEventListener("change", (e) => {
        validate(new RegExp("^" + loginNow + "$"), e.target.value);
    });

    elPassword.addEventListener("change", (e) => {
        validate(new RegExp("^" + passwordNow + "$"), e.target.value)
    });

    elLog.addEventListener("click", () => {
        if (
            validate(new RegExp("^" + loginNow + "$"), elLogin.value) &&
            validate(new RegExp("^" + passwordNow + "$"), elPassword.value)
        ) {
            localStorage.isAuthorization = true;
            document.location = "/"
        }
    })
} catch (error) {
    console.error(error)
}

function showProduct() {
    console.dir(document.location.pathname)
    if (document.location.pathname.search("store") !== -1) {
        const tbody = document.querySelector("table tbody");
        const data = JSON.parse(localStorage.BDStore);
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td title="При настиску сортувати.">${infoProduct.productQuantity === "" ? "0" : infoProduct.productQuantity}</td>
                <td title="При настиску сортувати.">${infoProduct.porductPrice} грн.</td>
                <td>&#128221;</td>
                <td>${infoProduct.status ? "&#9989;" : "&#10060;"}</td>
                <td>${infoProduct.dataAdd ? infoProduct.dataAdd : "Без дати"}</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""))
    }
}

showProduct()



let dataToTestVideo = [
    {
        dataAdd: "2023-1-31 0:10:29",
        id: "465.5023634455515aappp274.9418335520169a",
        productDate: "2022-02-10T22:00:00.000Z",
        productLink:"https://www.youtube.com/watch?v=_ARgtIqoRj4&list=RD_ARgtIqoRj4&start_radio=1",
        productName:"testName1"
    },
    {
        dataAdd: "2023-1-31 0:10:29",
        id: "465.5023634455515aappp274.9418335520169a",
        productDate: "2022-02-10T22:00:00.000Z",
        productLink: "https://www.youtube.com/watch?v=WNeLUngb-Xg&list=RD_ARgtIqoRj4&index=6",
        productName: "testName2"
    },
    {
        dataAdd: "2023-1-31 0:10:29",
        id: "465.5023634455515aappp274.9418335520169a",
        productDate: "2022-02-10T22:00:00.000Z",
        productLink:"../video/Jack Sparrow (feat. Michael Bolton).mp4",
        productName:"testName3"
    },
    {
        dataAdd: "2023-1-31 0:10:29",
        id: "465.5023634455515aappp274.9418335520169a",
        productDate: "2022-02-10T22:00:00.000Z",
        productLink:"../video/videoplayback.mp4",
        productName:"testName4"
    }
]
localStorage.BDVideo = JSON.stringify(dataToTestVideo)
showVideos()









