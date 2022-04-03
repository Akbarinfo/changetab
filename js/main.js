const elForm = document.querySelector('#id-form');
const elInput = document.querySelector('#id-input');
const elBtn = document.querySelector('#btn1');
const elBtn2 = document.querySelector('#btn2');
const elBtn3 = document.querySelector('#btn3');
const elText = document.querySelector('#text');

elForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if(elInput.value == 1) {
      elBtn.style.color = "black"
      elBtn2.style.color = "#d9d8da"
      elBtn3.style.color = "#d9d8da"
      elText.textContent = 'Postive content'
    }
    else if(elInput.value == 2) {
      elBtn2.style.color = "black"
      elBtn.style.color = "#d9d8da"
      elBtn3.style.color = "#d9d8da"
      elText.textContent = 'Negative content'
    }
    else if(elInput.value == 3) {
      elBtn3.style.color = "black"
      elBtn2.style.color = "#d9d8da"
      elBtn.style.color = "#d9d8da"
      elText.textContent = 'Neutral content'
    }
    else {
      alert('Index is invalid')
    }
    elInput.value = ""
});


function addBtn(e) {
  let id = e.target.id


  if(id == elBtn.id) {
    elBtn.style.color = "black"
    elBtn2.style.color = "#d9d8da"
    elBtn3.style.color = "#d9d8da"
    elText.textContent = 'Postive content'
  }
  else if(id == elBtn2.id) {
    elBtn2.style.color = "black"
    elBtn.style.color = "#d9d8da"
    elBtn3.style.color = "#d9d8da"
    elText.textContent = 'Negative content'
  }
  else if(id == elBtn3.id) {
    elBtn3.style.color = "black"
    elBtn2.style.color = "#d9d8da"
    elBtn.style.color = "#d9d8da"
    elText.textContent = 'Neutral content'
  }
}