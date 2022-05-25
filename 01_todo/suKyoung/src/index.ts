type HTMLElements = {
  form: HTMLFormElement | null;
  inputSearch: HTMLInputElement | null;
  buttonEdit: HTMLInputElement | null;
  buttonDelete: HTMLInputElement | null;
  buttonDeleteAll: HTMLInputElement | null;
}

function HTMLElements(): HTMLElements {
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#searchInput');
  const buttonEdit = document.querySelector('#edit');
  const buttonDelete = document.querySelector('#delete');
  const buttonDeleteAll = document.querySelector('#deleteAll');

  return {
    form: form as HTMLFormElement,
    inputSearch: inputSearch as HTMLInputElement,
    buttonEdit: buttonEdit as HTMLInputElement,
    buttonDelete: buttonDelete as HTMLInputElement,
    buttonDeleteAll: buttonDeleteAll as HTMLInputElement,
  }
}

const {form} = HTMLElements();
form?.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log( getInputValue() );
})

function getInputValue() {
  const { inputSearch } = HTMLElements();
  return inputSearch?.value;
}

