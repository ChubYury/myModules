function checkPhotoFile(file, setPhotoElement) {
  const isImages = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type);
  const bigSizeFile = file.size > 2 * 1024 * 1024

  if (!isImages) {
    alert('Разрешены только изображения.');
    setPhotoElement.value = '';
    return false;
  };

  if (bigSizeFile) {
    alert('Файл должен быть менее 2МБ.');
    return false;
  };
  return true;
};

export function dellPhotoFile(activeForm) {
  const [setPhotoElement] = activeForm.getElementsByClassName('js-form-preview-photo');
  
  if (setPhotoElement) setPhotoElement.innerHTML = '';
};

export const getPhotoFile = (activeForm) => {
  const [setPhotoElement] = activeForm.getElementsByClassName('js-form-set-photo');
  const [previewPhotoElement] = activeForm.getElementsByClassName('js-form-preview-photo');
  
  if (!setPhotoElement && !previewPhotoElement) return;
  const photoFile = setPhotoElement.files[0];
  return photoFile ? photoFile : null;
}

export function setPreviewPhoto(activeForm) {
  const [setPhotoElement] = activeForm.getElementsByClassName('js-form-set-photo');
  const [previewPhotoElement] = activeForm.getElementsByClassName('js-form-preview-photo');
  
  if (!setPhotoElement && !previewPhotoElement) return;

  setPhotoElement.addEventListener('change', () => {
    const file = setPhotoElement.files[0];
    if (!checkPhotoFile(file, setPhotoElement)) return;
    
    const reader = new FileReader();
    reader.onload = () => previewPhotoElement.innerHTML = `<img src="${reader.result}" alt="photo">`;
    reader.onerror = () => alert('Error');
    reader.readAsDataURL(file);
  });
};




























