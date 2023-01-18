async function userInfo(url) {

    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = () => {
            if (xhr.status === 200) {
                if (xhr.readyState === 4)
                    resolve(JSON.parse(xhr.response));
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}

userInfo("https://swapi.dev/api/planets/")
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            let dtRes = data.results[i]

            let outputPlanet = `
         <ul data-name-planet="${dtRes['name']}">Planet name: ${dtRes['name']}, Terrain: ${dtRes['terrain']}, Climat: ${dtRes['climate']}
         </ul>
         <hr>
      `
            document.body.insertAdjacentHTML('beforeend', outputPlanet)
            for (const el of dtRes.residents) {
                userInfo(el).then(data_json => data_json).then(data => {
                    // await fetch(el, options).then(data_json => data_json.json()).then(data => {
                    document.querySelector(`[data-name-planet="${dtRes['name']}"]`)
                        .insertAdjacentHTML('beforeend', `<li>${data.name}</li>`)
                });
            }
        }
    }
    );