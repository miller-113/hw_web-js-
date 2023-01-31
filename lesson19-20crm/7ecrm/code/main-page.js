import { createCategoryInputModal , validateInputCategory } from "./functions.js";

//     NEW
import {validateInputVideo} from './videoHost.js';



if (!localStorage.BDStore) {
    localStorage.BDStore = JSON.stringify([])
} else {
    console.log(localStorage.BDStore)
}

let categoryName = null;
export {categoryName}

try {
    //main page 
    const btnModal = document.getElementById("btn-modal"),
        selectModal = document.getElementById("select-data"),
        btnClose = document.getElementById("close"),
        btnSave = document.getElementById("save"),
        modalWindow = document.querySelector(".container-modal"),
        categoryInfo = document.querySelector(".category-info");

    btnModal.addEventListener("click", () => {

        modalWindow.classList.add("active");
    })

    btnClose.addEventListener("click", () => {
        modalWindow.classList.remove("active")
    })

    btnSave.addEventListener("click", (e) => {
        if (categoryName === "Ресторан") {
            console.error("Категорія поки не готова!")
            return
        } else if (categoryName === "Магазин") {
            let objInfo = {
                id: "",
                productName: "",
                porductPrice: "",
                productImage: "",
                productDescription: "",
                productQuantity: "",
                keywords: [],
            };
            validateInputCategory(objInfo)

        //     NEW
        } else if (categoryName === "Відео хостинг"){
            let objInfo = {
                id: "",
                productName: "",
                porductDate: "",
                productLink: "",
            };
            validateInputVideo(objInfo)
        }
        else {
            console.error("Поки немає реалізації")
            return
        }

    })

    

    selectModal.addEventListener("change", (e) => {
        categoryInfo.innerHTML = ""
        // debugger
        if (e.target.value === "Ресторан") {
            categoryName = "Ресторан"
            categoryInfo.insertAdjacentHTML("afterbegin", createCategoryInputModal(restoration).join(""));
        } else if (e.target.value === "Магазин") {
            categoryName = "Магазин"
            categoryInfo.insertAdjacentHTML("afterbegin", createCategoryInputModal(store).join(""));

        //     NEW
        } else if (e.target.value === "Відео хостинг") {
            categoryName = "Відео хостинг"
            categoryInfo.insertAdjacentHTML("afterbegin", createCategoryInputModal(video).join(""));
            // VideoEventInput()
        }

    })
} catch (e) {
    console.error(e)
}


const restoration = ["Назва продукта", "Введіть грамовку", "Введіть склад", "Вартість страви", "Зобреження", "Гарячі слова, розділяйте комою.", "Вага фінальна"];
const store = ["Назва продукта", "Введіть вартість", "Посилання на зображення", "Опис товару", "Гарячі слова, розділяйте комою."]

//     NEW
const video = ['Назва', 'Дата публікації', 'Посилання'];






