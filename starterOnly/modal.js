
// DOM Elements

const modalBg = document.querySelector(".bground");
const content = document.querySelector(".content");
const reservationForm = document.querySelector('.reservation-form')
const modalBody = document.querySelector('.modal-body');
const thanksBox = document.querySelector('.thanks-box')
const textControl = document.querySelectorAll('.text-control');
const radios = document.querySelectorAll('.radio')
const checkboxRequired = document.querySelector('#checkbox-required')
const alerts = document.querySelectorAll('.alert')
const main = document.querySelector('main')
const body = document.querySelector('body')
const topNav = document.querySelector('.topnav')
//timer function 
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// launch modal form
const launchModal = () => {
  console.log('enter')
  modalBg.style.display = "flex";
  body.style.overflow = "hidden";
  body.style.height = "100vh"
  topNav.style.overflow =  "visible"
}
// launch modal event
const closeModal = async () => { // ferme le modal 

  content.classList.add("modal-close-animation");
  modalBg.style.background = 'rgba(26, 39, 156, 0)';
  await timeout(795);// wait 795ms
  modalBg.style.display = "none";
  modalBg.style.background = "rgba(26, 39, 156, 0.4)";/// cette fonction est essetiellement une animation(fondu) de la fermeture du modal
  content.classList.remove("modal-close-animation");
  main.style.position = "initial";
  body.style.overflow = "scroll";
  body.style.height = "100%"
  topNav.style.overflow =  "hidden"
  if (thanksBox.style.display !== "none") {// ferme la thankbox si elle existe
    thanksBox.style.display = "none";
    modalBody.style.display = "block";
    modalBody.style.opacity = 1;
  }
}


// form check function
reservationForm.addEventListener('submit',  (e) => {

  e.preventDefault();
  // utilisation de tickets
  let reservationToken = 0;// permet de controller si tous le champs renseignés sont justes , il doit rester à 0
  let radioToken = 0;//permet de savoir si un bouton radio (devenu une checkbox) a au moins éte coché
  const checkName = /^([a-zA-Z]){2,}$/;//uniquement des lettres majuscules et minuscules
  const checkMail = /^\S+@\S+\.\S+$/;//d'abbord un @ pui un . doit étre pésent
  const checkDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/; //format year-mounth-day (le string doit demaré avec 4 chiffres) ( le string doit avoir un chiffre entre 1 et 12) (le premier chiffre n'existe pas ou entre 0 et 9)
  const checkNumber = /^[1-9][0-9]?$/;//uniquement deux chiffres le premier de 1 a 9 et le second de 0 a 9 donc de 1 a 99

  textControl.forEach(e => {// selectionne tous les inputs text
    console.log(checkName.test(e.value))
    if ((e.id === "first-name" || e.id === "last-name") && !checkName.test(e.value)) {// pour les deux prmier champs controlle du regex
      e.classList.add('text-error');
      if (e.id === "first-name") {
        alerts[0].classList.add('alert-active');
      }
      else if (e.id === "last-name") {
        alerts[1].classList.add('alert-active');
      }
      reservationToken++; // comme l'input n'est pas correct alors token +1
    } else if ((e.id === "first-name" || e.id === "last-name") && checkName.test(e.value)) {
      e.classList.remove('text-error')
      if (e.id === "first-name") {
        alerts[0].classList.remove('alert-active');
      }
      else if (e.id === "last-name") {
        alerts[1].classList.remove('alert-active');
      }
    }
    if (e.id === 'email' && !checkMail.test(e.value)) {// test du mail
      e.classList.add('text-error');
      reservationToken++;
      alerts[2].classList.add('alert-active');
    } else if (e.id === 'email' && checkMail.test(e.value)) {
      e.classList.remove('text-error');
      alerts[2].classList.remove('alert-active');
    }
    if (e.id === 'birth-date' &&( !checkDate.test(e.value) || !dateRange(e.value))) {// test date de naissance
      e.classList.add('text-error');
      reservationToken++;
      alerts[3].classList.add('alert-active');
    } else if (e.id === 'birth-date' && checkDate.test(e.value) && dateRange(e.value)) {
        e.classList.remove('text-error');
        alerts[3].classList.remove('alert-active');
    }
    if (e.id === 'quantity' && !checkNumber.test(e.value)) {// test du nombres d'evenement auquel l'utilisateur a participé
      e.classList.add('text-error');
      reservationToken++;
      alerts[4].classList.add('alert-active');
    } else if (e.id === 'quantity' && checkNumber.test(e.value)) {
      e.classList.remove('text-error')
      alerts[4].classList.remove('alert-active');
    }
  })
  radios.forEach(e => { // on controle si un radio est checked
    if (e.checked) radioToken++
  })
  if (radioToken === 0) {
    reservationToken++;
    alerts[5].classList.add('alert-active');
  } else if (radioToken !== 0) {
    alerts[5].classList.remove('alert-active');
  }
  if (!checkboxRequired.checked) {
    reservationToken++
    alerts[6].classList.add('alert-active');
  } else if (checkboxRequired.checked) {
    alerts[6].classList.remove('alert-active');
  }

  if (reservationToken === 0) animationOnSubmit() // si les champs sont tous correct
   
  
})
const animationOnSubmit = async() => {
 modalBody.style.transition = '0.3s';
    modalBody.style.opacity = 0;
    await timeout(300) // attendre 300 ms
    modalBody.style.display = "none";
    thanksBox.style.display = "flex";
    reservationForm.reset();// reset le formulaire

}
const dateRange = (date) => { // fonction qui controle si la date est bien comprise dans un certain intervale
  const testedDate = new Date(date);// la date a tester
  const currentDate = new Date(); //la date d'aujourd'hui
  const olderDate = new Date(1920 / 01 / 01)//la date la plus vielle
  if (testedDate < currentDate && testedDate > olderDate) return true
  else return false
}

function editNav() { // j'ai laissé tel quel
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

