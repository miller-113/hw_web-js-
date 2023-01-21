let url = 'https://swapi.dev/api/planets/';
let options =
{
   method: 'GET',
}
const containerData = document.querySelector('.wrapperData')
let req = fetch(url, options);

function showPlanets(data){
   document.querySelector(".loader").classList.add("active")

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
   document.querySelector(".loader").classList.remove("active")

}

function showResidents() {

   let residents = this.dataset.residents.split(',')
   if (!this.children.length) {
      document.querySelector(".loader").classList.add("active")

      for (const el of residents) {
         fetch(el, options).then(data_json => data_json.json()).then(data => {
            this.insertAdjacentHTML('beforeend', `<li>${data.name}</li>`)
         });
      }

      document.querySelector(".loader").classList.remove("active")

   }else{
      [...this.children].forEach(e => e.remove())
   }
}



function showNbu(data){
   console.log(data);
   let outputDataExc = []
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

req.then(response => response.json())
    .then(data => starWars.addEventListener('click', function (){
       showPlanets(data)
    }))
    .catch(err => {console.error(err);  });

nbu.addEventListener('click', function (){
   document.querySelector(".loader").classList.add("active")
   fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', options)
       .then(data => data.json())
       .then(data => {
      showNbu(data)
   })
   document.querySelector(".loader").classList.remove("active")

})