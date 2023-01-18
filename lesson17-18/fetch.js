let url = 'https://swapi.dev/api/planets/';
let options =
{
   method: 'GET',
}

let req = fetch(url, options);
req
.then(response => response.json())
.then(async data => {
   console.log(data.results[0]);
   for (let i = 0; i < data.results.length; i++) {
      let dtRes = data.results[i]

      let outputPlanet = `
         <ul data-name-planet="${dtRes['name']}">Planet name: ${dtRes['name']}, Terrain: ${dtRes['terrain']}, Climat: ${dtRes['climate']}
         </ul>
         <hr>
      `
      document.body.insertAdjacentHTML('beforeend', outputPlanet)
      for (const el of dtRes.residents) {
          fetch(el, options).then(data_json => data_json.json()).then(data => {
          // await fetch(el, options).then(data_json => data_json.json()).then(data => {
            document.querySelector(`[data-name-planet="${dtRes['name']}"]`)
                .insertAdjacentHTML('beforeend', `<li>${data.name}</li>`)
         });
      }
   }
})
.catch(err => {console.error(err);  });
