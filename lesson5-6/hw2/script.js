var url_ = 'https://jsonplaceholder.typicode.com/comments'

async function fetchDataAsync(url) {
    const response = (await fetch(url)).json();
    console.log(await response.finally());
    return await response;
}

a = fetchDataAsync(url_);
a.then(a => a.map(b => {
    htmlBody = `
        <section class="section-comment-inner">
            <div class="name-outer">
                <span class="id-c">${b.id}</span><span class="name-c">&nbsp${b.name}</span>
            </div>
            <div class="body-c">
                ${b.body}
            </div>
            <div class="email-c">
                <a href="mailto:${b.email}" ${b.email}
            </div>
        </section>
        `
    // body_ = `<div>${b.body}</div>`;
    // name_ = `<div>${b.name}</div>`;
    // email_ = `<div>${b.email}</div>`;
    // id_ = `<span>${b.id}</span>`;
    console.log(document.getElementById('sec-comment').innerHTML += htmlBody,)
    // console.log(document.getElementById('body-c').innerHTML += body_,
    // document.getElementById('email-c').innerHTML += email_,
    // document.getElementById('name-inner-c').innerHTML += name_,
    // document.getElementById('id-c').innerHTML += id_, b.postId)
    // document.getElementById('id-c').innerHTML += id_, b.postId)
}))