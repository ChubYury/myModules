import { 
        setPreviewPhoto,
        getPhotoFile,
        dellPhotoFile
        } from "./formPhotoHandler.js";

function addErrorClass(input, parent) {
  if (input) input.classList.add('is-error');
  if (parent) parent.classList.add('is-error');
};

function removeErrorClass(input, parent) {
  if (input) input.classList.remove('is-error');
  if (parent) parent.classList.remove('is-error');
};

function checkEmailValue(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//------------------------------------------------------------------------------------------------

function grecaptchaHandler(form) {
  const [recBody] = form.getElementsByClassName('js-recaptcha');
  const recBodyId = Number(recBody.dataset.tabindex);
  const isGrecaptcha = grecaptcha.getResponse(recBodyId);
  
  if(isGrecaptcha.length == 0) return false
  else return true;
};

function grecaptchaReset(form) {
  const [recBody] = form.getElementsByClassName('js-recaptcha');
  const recBodyId = Number(recBody.dataset.tabindex);
  
  grecaptcha.reset(recBodyId); 
};

//------------------------------------------------------------------------------------------------

function formValidate(activeForm) {
  let error = 0;
  let reqInpsList = [...activeForm.querySelectorAll('[data-req]')];

  reqInpsList.forEach(reqInp => {
    const reqInpParent = reqInp.parentElement;
    const reqInpName = reqInp.dataset.req;

    removeErrorClass(reqInp, reqInpParent);
    switch (reqInpName) {
      case 'name':
        if (reqInp.value === '') {
          addErrorClass(reqInp, reqInpParent);
          error++;
        }
        break;
      case 'email':
        if (checkEmailValue(reqInp)) {
          addErrorClass(reqInp, reqInpParent);
          error++;
        }
        break;
      case 'checkbox':
        if (reqInp.getAttribute("type") === "checkbox" && reqInp.checked === false) {
          addErrorClass(reqInp, reqInpParent);
          error++;
        }
        break;
      case 'grecaptcha':
        if (!grecaptchaHandler(activeForm)) {
          addErrorClass(reqInp, reqInpParent);
          error++;
        }
        break;
      default:
        break;
    };
  });
  return error;
};

async function submitForm(activeForm) {
  const error = formValidate(activeForm);
  
  if (error > 0) return;
  activeForm.classList.add('is-submit');
  const newFormData = new FormData(activeForm);
  const newPhotoFile = getPhotoFile(activeForm);
  const action = activeForm.getAttribute('action') ? activeForm.getAttribute('action') : 'sender.php';
  
  if (newPhotoFile !== null) newFormData.append('image', newPhotoFile);
  
  const respons = await fetch(action, {
    method: 'POST',
    body: newFormData
  });

  if (respons.ok) {
    dellPhotoFile(activeForm);
    grecaptchaReset(activeForm);
    activeForm.reset();
    activeForm.classList.remove('is-submit');
  };
};

//------------------------------------------------------------------------------------------------

export function initFormsHandler() {
  const formsList = [...document.getElementsByClassName('js-form')];
  
  if (formsList.length === 0 ) return;
  formsList.forEach(form => {
    setPreviewPhoto(form);

    form.addEventListener('submit', e => {
      e.preventDefault();
      
      submitForm(form);
    });
  });
};