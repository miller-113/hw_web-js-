export function isAuthorization () {
    if(document.location.pathname.search("authorization") !== -1){
        return
    }

    if(!localStorage.isAuthorization){
        document.location = "/authorization"
    }
} 

export function validate (p, v) {
    return p.test(v)
}

export function createCategoryInputModal(array = []) {
    return array.map((name) => {
        const id = generatorID();
        return `<div><label for="${id}">${name}</label><input data-type="${name}" id="${id}" type="text"></div>`
    })
}



export function generatorID() {
    const sumbol = ["a", "b", "c", "d", 'а', "б", 'p'];
    const randomID = Math.random() * 1000 + sumbol[Math.floor(Math.random() * sumbol.length)] + sumbol[Math.floor(Math.random() * sumbol.length)] + sumbol[Math.floor(Math.random() * sumbol.length)] + sumbol[Math.floor(Math.random() * sumbol.length)] + sumbol[Math.floor(Math.random() * sumbol.length)] + Math.random() * 1000 + sumbol[Math.floor(Math.random())];
    return randomID;
}

export function validateInputCategory(obj) {
    const [...inputs] = document.querySelectorAll(".category-info input");
    inputs.forEach((el) => {
        if (el.value.length >= 3) {
            obj.id = generatorID();
            obj.dataAdd = 
            `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            if (el.dataset.type === "Назва продукта") {
                obj.productName = el.value;
            } else if (el.dataset.type === "Введіть вартість") {
                obj.porductPrice = parseFloat(el.value);
            } else if (el.dataset.type === "Посилання на зображення") {
                obj.productImage = el.value
            } else if (el.dataset.type === "Опис товару") {
                obj.productDescription = el.value;
            } else if (el.dataset.type === "Гарячі слова, розділяйте комою.") {
                obj.keywords.push(...el.value.split(","))
            }
            el.value = ""
            el.classList.remove("error")
        } else {
            el.classList.add("error")
            return
        }
    })

    let data = JSON.parse(localStorage.BDStore);
    data.push(obj)
    localStorage.BDStore = JSON.stringify(data);
}


