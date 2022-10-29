const url_ = 'https://jsonplaceholder.typicode.com/comments';

const wrapper = document.createElement('div')
wrapper.className = "section-comment";wrapper.id = "sec-comment";
document.body.append(wrapper)

async function fetchDataAsync(url) {
    const response = (await fetch(url)).json();
    await response.finally();
    return await response;
}

const createSection = (class_, selector='') => {
    const item = document.createElement('section')
    item.className = class_
    const list = document.querySelectorAll(selector)
    const last = list[list.length - 1]
    last.append(item)
    return ''
}

const createHtmlElement = (innerHtml='', class_='',
                           selector='', element='div',
                           attrs='') => {
    const item = document.createElement(element)
    item.className = class_
    this.it = item.innerHTML = innerHtml
    if (element === 'a') {
        item.setAttribute('href', attrs)
    }
    const list = document.querySelectorAll(selector)
    const last = list[list.length - 1]
    last.append(item)
    if (element === 'button'){
        item.onclick = click;
    }
    return ''
}

let i = 0 // ФИКС на 10 комментариев

a = fetchDataAsync(url_);
a.then(a => a.map(b => {
    if (i < 10) {
        htmlBody = [
            createSection("section-comment-inner",
                '.section-comment'),
            createHtmlElement('', class_ = "name-outer",
                ".section-comment-inner", 'div'),
            createHtmlElement(b.id, 'id-c', '.name-outer',
                'span'),
            createHtmlElement(`&nbsp${b.name}`, 'name-c',
                '.name-outer', 'span'),
            createHtmlElement(b.body, 'body-c',
                '.section-comment-inner', 'div'),
            createHtmlElement('', 'email-c',
                '.section-comment-inner', 'div'),
            createHtmlElement(b.email, '', '.email-c',
                'a', `mailto:${b.email}`),
            createHtmlElement('Change comment', 'myBtn btn btn-dark',
                '.section-comment-inner', 'button')
        ]
        document.getElementById('sec-comment').append(...htmlBody)
    }
    i++;
}))






