// CREATE MODAL
const myModal = document.createElement('div')
myModal.id = 'myModal'; myModal.className = 'modal';
const modal_content = document.createElement('div')
modal_content.className = 'modal-content'
const modal_header = document.createElement('div')
modal_header.className = 'modal-header'
const modal_body = document.createElement('div')
modal_body.className = 'modal-body'

const h2 = document.createElement('h2');
h2.className = 'comm-text'
const span_ = document.createElement('span');
span_.className = 'close';span_.innerHTML = '&times;'
const h4 = document.createElement('h4');
const label = document.createElement('label');
label.for = "change-comm";label.innerHTML = 'Change commentary:';
const textarea = document.createElement('textarea');
textarea.rows = '5';textarea.sizing = 'false'; textarea.id = 'change-comm';
const button_ = document.createElement('button');
button_.className = 'btn btn-dark';button_.id = 'save-button';
button_.innerHTML = 'Save'

//ADDING to html
document.body.append(myModal)
document.querySelector('.modal').append(modal_content)
document.querySelector('.modal-content').append(modal_header, modal_body)
document.querySelector('.modal-header').append(h2, span_)
document.querySelector('.modal-body').append(h4, textarea, button_)
document.querySelector('h4').append(label)
// CREATE END

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
