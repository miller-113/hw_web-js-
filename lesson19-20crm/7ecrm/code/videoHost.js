
import {createCategoryInputModal, generatorID} from "./functions.js";
// import {categoryName} from "./main-page.js";

// let categoryInfo = document.querySelector(".category-info");
// const selectModal = document.getElementById("select-data")
// let categoryName = null;
//
// export function VideoEventInput() {
//     // debugger
//     selectModal.addEventListener("change", (e) => {
//         console.log(1111)
//         // debugger
//         categoryInfo.innerHTML = ""
//         if (e.target.value === "Відео хостинг") {
//             categoryName = "Відео хостинг";
//             categoryInfo.insertAdjacentHTML("afterbegin", createCategoryInputModal(video).join(""));
//         }
//     })
// }
//
// const video = ["Video name", "Path to file"];


export function validateInputVideo(obj) {
    const [...inputs] = document.querySelectorAll(".category-info input");
    inputs.forEach((el) => {
        if (el.value.length >= 3) {
            obj.id = generatorID();
            obj.dataAdd =
                `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            if (el.dataset.type === "Назва") {
                obj.productName = el.value;
            } else if (el.dataset.type === "Дата публікації") {
                obj.productDate = (new Date(el.value) == 'Invalid Date') ? new Date() : new Date(el.value);
            } else if (el.dataset.type === "Посилання") {
                obj.productLink = el.value
            }
            el.value = ""
            el.classList.remove("error")
        } else {
            el.classList.add("error")
            return
        }
    })
    // let data = undefined
    if (localStorage.BDVideo) {
        let data = [JSON.parse(localStorage.BDVideo)];
        data.push(obj)
        localStorage.BDVideo = JSON.stringify(data);
    }else{
        localStorage.BDVideo = JSON.stringify(obj);
    }
}


export function showVideos() {
    console.dir(document.location.pathname)
    if (document.location.pathname.search("video") !== -1) {
        const tbody = document.querySelector("table tbody");
        const data = JSON.parse(localStorage.BDVideo);
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td>${infoProduct.productDate}</td>
                <td>${implementVideo(infoProduct.productLink)}</td>
                <td>&#128221;</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""))
    }
}


function implementVideo(videoSrc) {
    // debugger
    let video = undefined
    if (videoSrc.search('youtube') !== -1) {
        video = `
            <iframe width="560" height="315"
             src="https://www.youtube.com/embed/${videoSrc.match(/(?<=watch\?v=)[\w0-9-]+/)[0]}"
              title="YouTube video player" frameborder="0"
               allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope;
                 picture-in-picture; web-share"
                  allowfullscreen>      
            </iframe>
          `
    }else {
        video = `<video controls="" height="315" width="560" src="${videoSrc}"></video>`
    }
    return video
}