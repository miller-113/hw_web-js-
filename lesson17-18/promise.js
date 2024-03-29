// debugger
function userInfo(url) {
    document.querySelector(".loader").classList.add("active")
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



let url = 'https://swapi.dev/api/planets/';

const containerData = document.querySelector('.wrapperData')

function showPlanets(data){

    let outputPlanets = []
    for (let i = 0; i < data.results.length; i++) {
        let dtRes = data.results[i]
        let outputPlanet = `
      <ul class="planets" data-residents="${dtRes['residents']}" data-name-planet="${dtRes['name']}">Planet name: ${dtRes['name']}, Terrain: ${dtRes['terrain']}, Climat: ${dtRes['climate']}
      </ul>
      <hr>
   `
        outputPlanets.push(outputPlanet)
    }
    containerData.innerHTML = outputPlanets.join('')
    let planets = document.querySelectorAll('.planets')
    planets.forEach(e => {
        e.onclick = showResidents
    })

}

function showResidents() {

    let residents = this.dataset.residents.split(',')
    if (!this.children.length) {

        for (const el of residents) {
            userInfo(el).then(data => {
                this.insertAdjacentHTML('beforeend', `<li>${data.name}</li>`)

            });
        }

    }else{
        [...this.children].forEach(e => e.remove())
    }
    document.querySelector(".loader").classList.remove("active")

}


function showNbu(data){

    output = `<table>
  <tr>
    <th>Валюта</th>
    <th>Курс</th>
    <th>СС</th>
    <th>Дата</th>
  </tr>
  ${data.map(el => {
        return `
      <tr>
          <td>${el.txt}</td>
          <td>${el.rate}</td>
          <td>${el.cc}</td>
          <td>${el.exchangedate}</td>
       </tr>
      `
    }).join('')}
  
</table>`
    containerData.innerHTML = output
}


userInfo(url).then(data => starWars.addEventListener('click', function (){
        showPlanets(data)
    // document.querySelector(".loader").classList.remove("active")

    }))
    .catch(err => {console.error(err);  })
    .finally(() => {
        document.querySelector(".loader").classList.remove("active")
    });

nbu.addEventListener('click', function (){
    userInfo('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(data => {
            showNbu(data)
        })
        .finally(() => {
            document.querySelector(".loader").classList.remove("active")
        });
    document.querySelector(".loader").classList.remove("active")

})