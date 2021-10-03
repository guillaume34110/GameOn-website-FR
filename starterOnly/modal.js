
// DOM Elements
const modalBg = document.querySelector(".bground");
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".form-data");
const closeBg = document.querySelector('.close');
const reservationForm = document.querySelector('.reservation-form')
const modalBody = document.querySelector('.modal-body');
const thanksBox = document.querySelector('.thanks-box')
const textControl = document.querySelectorAll('.text-control');
const radios = document.querySelectorAll('.radio')
const checkboxRequired = document.querySelector('#checkbox-required')
const alerts = document.querySelectorAll('.alert')
//timer function 
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// launch modal form
const launchModal = () => {
  console.log('enter')
  modalBg.style.display = "flex";
}
// launch modal event
const closeModal = async () => {
  content.classList.add("modal-close-animation");
  modalBg.style.background = 'rgba(26, 39, 156, 0)';
  await timeout(795);
  modalBg.style.display = "none";
  modalBg.style.background = "rgba(26, 39, 156, 0.4)";
  content.classList.remove("modal-close-animation");
}

const closeThanks = async() =>{
  await closeModal(); 
  thanksBox.style.display = "none";
  modalBody.style.display = "block";
  modalBody.style.opacity = 1;
  
}


reservationForm.addEventListener('submit', async (e) => {
 
  e.preventDefault();
 let reservationToken = 0;
 let radioToken = 0;
  const checkName = /^([a-zA-Z]){2,}$/;
  const checkMail = /^\S+@\S+\.\S+$/;
  const checkDate = /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  const checkNumber = /^[1-9][0-9]?$/;
  textControl.forEach (e=> {
   console.log(checkName.test(e.value))
    if ((e.id === "first-name"||e.id === "last-name") && !checkName.test(e.value) ) {
      e.classList.add('text-error')
      if (e.id === "first-name") {
        alerts[0].classList.add('alert-active')
      }
      else if (e.id === "last-name") {
        alerts[1].classList.add('alert-active')
      }
      reservationToken ++
    }else if((e.id === "first-name"||e.id === "last-name") && checkName.test(e.value)){
      e.classList.remove('text-error')
      if (e.id === "first-name") {
        alerts[0].classList.remove('alert-active')
      }
      else if (e.id === "last-name") {
        alerts[1].classList.remove('alert-active')
      }
    }
    if (e.id==='email' && !checkMail.test(e.value)) {
      e.classList.add('text-error')
      reservationToken ++
      alerts[2].classList.add('alert-active')
    }else if(e.id==='email' && checkMail.test(e.value)){
      e.classList.remove('text-error')
      alerts[2].classList.remove('alert-active')
    }
    if (e.id==='birth-date' && !checkDate.test(e.value)) {
      e.classList.add('text-error')
      reservationToken ++
      alerts[3].classList.add('alert-active')
    }else if(e.id==='birth-date' && checkDate.test(e.value)){
      e.classList.remove('text-error')
      alerts[3].classList.remove('alert-active')
    }
    if (e.id==='quantity' && !checkNumber.test(e.value)) {
      e.classList.add('text-error')
      reservationToken ++
      alerts[4].classList.add('alert-active')
    }else if(e.id==='quantity' && checkNumber.test(e.value)){
      e.classList.remove('text-error')
      alerts[4].classList.remove('alert-active')
    }
  })
  radios.forEach (e=> {
    if (e.checked) radioToken++
    })
    if (radioToken === 0 ){
      reservationToken++
      alerts[5].classList.add('alert-active')
    }else if (radioToken!== 0 ){
      alerts[5].classList.remove('alert-active')
    }
    if (!checkboxRequired.checked ){
      reservationToken++
      alerts[6].classList.add('alert-active')
    }else if (checkboxRequired.checked ){
      alerts[6].classList.remove('alert-active')
    }

  if (reservationToken===0){
  modalBody.style.transition = '0.3s'
  modalBody.style.opacity = 0
  await timeout(300)
  modalBody.style.display = "none"
  thanksBox.style.display = "flex"
  reservationForm.reset()
  }
})

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

