import { HTMLElements } from "./utils";
import { deleteAll, submitForm } from "./crud";
init();
function init() {
    const { form, buttonDeleteAll } = HTMLElements();
    form.addEventListener('submit', submitForm);
    buttonDeleteAll.addEventListener('click', deleteAll);
}
