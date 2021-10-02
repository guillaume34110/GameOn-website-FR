
// DOM Elements
const modalBg = document.querySelector(".bground");
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBg = document.querySelector('.close');
const reservationForm = document.querySelector('.reservation-form')
//timer function 
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// launch modal form
const launchModal = () => {
  modalBg.style.display = "block";
}
// launch modal event
const closeModal = async() => {
  content.classList.add("modal-close-animation" );
  modalBg.style.background = 'rgba(26, 39, 156, 0)';
 await timeout(795);
  modalBg.style.display = "none";
  modalBg.style.background= "rgba(26, 39, 156, 0.4)";
  content.classList.remove("modal-close-animation" );
}
//event Listeners
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBg.addEventListener("click" , closeModal);
reservationForm.addEventListener('submit',(e) => {
  console.log(e ,'e')
  e.preventDefault();
  reservationForm.reset()
  closeModal()
})


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const HandleSubmit = (e) => {
  
  
 
}
/*const radioCheck = () => {
  const radios =  document.querySelectorAll(".radio");
  const radiosError = document.querySelector(".radio-error");
    let checkToken = 0;
    radios.forEach((input) => {
      console.log(input,'input')
      if (input.checked === true) checkToken++
    })
    if (checkToken !== 1) {
      radiosError.style.display = 'flex'
    }
}*/