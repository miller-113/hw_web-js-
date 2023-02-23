const date = `© 2002 – ${new Date().getFullYear()} Мережа піцерій Domino!`,
    validate = (r, v) => r.test(v);

const user = {
    name: "",
    phone: "",
    email: ""
}

let pizza;
let pizzaPrice;

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("address").innerText = date;
    const form = document.getElementById("contact-form");
    const [...inputsForm] = document.querySelectorAll("#contact-form input");

    function inputValidate() {
        debugger
        let item = this;

        if (item.type === "text" && validate(/^[А-яіїґє-]+$/i, item.value)) {
            user.name = item.value.toLowerCase();
            item.classList.add("success");
            item.classList.remove("error")
        } else if (item.type === "email" && validate(/^[A-z_0-9.]+@[A-z-]+\.[A-z]{1,4}\.?[A-z]*$/, item.value)) {
            user.email = item.value.toLowerCase();
            item.classList.add("success");
            item.classList.remove("error")
        } else if (item.type === "tel" && validate(/^\+380[0-9]{9}$/, item.value)) {
            user.phone = item.value.toLowerCase();
            item.classList.add("success");
            item.classList.remove("error")
        }
        else {
            item.classList.add("error");
            item.classList.remove("success")
        }
    }

    inputsForm.forEach((item) => {
        if (item.type === "text" || item.type === "email" || item.type === "tel") {
            item.addEventListener("change", inputValidate)
        }
    })

    form.addEventListener("submit", (e) => {
        console.log("contact-form");

        inputsForm.forEach(function (item) {

            if (item.type === "text" || item.type === "email" || item.type === "tel") {
                inputValidate.apply(item)
            }
        })
        e.preventDefault()
    })

    // информация о пицце
    pizza = {
        size: {size: 'big', price: '30'},
        souse: [],
        topings: [],
    }

    // БД названий, цен, веса
    pizzaPrice = {
        sizing: [{size: 'small', price: '10'},
            {size: 'mid', price: '20'},
            {size: 'big', price: '30'}],
        souse: [{name:'Ketchup', weight: '40', price: '5'},
            {name:'BBQ', weight: '40', price: '5'},
            {name:'Rikotta', weight: '40', price: '5'}],
        topings: [
            {name: 'cheese', weight: '40', price: '5'},
            {name: 'Feta', weight: '40', price: '5'},
            {name: 'Mozzarela', weight: '40', price: '5'},
            {name: 'Veal', weight: '40', price: '5'},
            {name: 'Tomatoes', weight: '40', price: '5'},
            {name: 'Mushrooms', weight: '40', price: '5'}
        ]
    }

    let ingridients = document.querySelector('.ingridients')

    //узнаем информацию о начинке
    ingridients.addEventListener('click', function (e){
        if (!e.target.closest('img')){return}
        let checkTopings = pizzaPrice.souse.every(el => el.name !== e.target.id)
        if (checkTopings){
            pizza.topings.push(pizzaPrice.topings.find(el => {
                return el.name === e.target.id
            }))
        }else {
            pizza.souse.push(pizzaPrice.souse.find(element => {
                return e.target.id === element.name
            }))
        }
        showIngredients(pizza)
    })

    // узнаем размер пиццы
    const [...pizzaSize] = document.querySelectorAll('#pizza input[type="radio"]')
    pizzaSize.forEach(e => {
        e.addEventListener('click', function (e){
            pizza.size = pizzaPrice.sizing.find(element => {
                return element.size === e.target.value
            })
            showIngredients(pizza)
        })
    })
// вывод данных пиццы
    function showIngredients(obj){
        // debugger
        let price = document.querySelector('.price span')
        let souse = document.querySelector('.sauces span')
        let topings = document.querySelector('.topings span')

        let priceTotal = parseInt(obj.size.price)
        let souseTotals = obj.souse.map(el => {return el.name})
        obj.souse.forEach(e => {
            priceTotal += parseInt(e.price)
        })
        obj.topings.forEach(e => {
            priceTotal += parseInt(e.price)
        })
        let topingsTotals = obj.topings.map(el => {return el.name})
        // priceTotal = obj.price

        price.innerText = ` ${priceTotal} `
        souse.innerText = souseTotals
        topings.innerText = ` ${topingsTotals} `

    }


})




