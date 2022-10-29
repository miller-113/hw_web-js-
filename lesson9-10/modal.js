// Get the modal
var modal = document.querySelector(".modal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");



// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function click(){

    // console.log(this.parentNode)
    // console.log(this.parentNode.querySelector('.body-c').innerHTML)

    var commentary_text = this.parentNode.querySelector('.body-c')
    var modal_header = document.querySelector('.comm-text').innerHTML =
        commentary_text.innerHTML
    modal.style.display = 'block'

    var save_button = document.querySelector('#save-button')
    var text_from_textarea = document.querySelector('#change-comm')

    save_button.onclick = function (){

      if (text_from_textarea.value !== ''){
        commentary_text.innerHTML = text_from_textarea.value;
        alert('Your commentary saved');
      }else{
        alert('Text some text for change');
      }
    }
}
