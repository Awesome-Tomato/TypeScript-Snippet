// FIXME: 혹시모를 예외처리 필요
export function HTMLElements() {
    const form = document.querySelector('form');
    const inputSearch = document.querySelector('#searchInput');
    const buttonSubmit = document.querySelector('#submit');
    const buttonEdit = document.querySelector('.edit');
    const buttonDeleteAll = document.querySelector('#deleteAll');
    const listResult = document.querySelector('ul');
    const messageAlert = document.querySelector('.message_alert');
    return {
        form: form,
        inputSearch: inputSearch,
        buttonSubmit: buttonSubmit,
        buttonEdit: buttonEdit,
        buttonDeleteAll: buttonDeleteAll,
        listResult: listResult,
        messageAlert: messageAlert,
    };
}
// FIXME: enum을 사용하도록 변경
export const messages = [
    { text: 'Please Enter Value', add: 'warning', remove: 'success' },
    { text: 'Item added to the list', add: 'success', remove: 'warning' },
    { text: 'All items are deleted', add: 'warning', remove: 'success' },
    { text: 'A single item is deleted', add: 'warning', remove: 'success' },
    { text: 'Value changed', add: 'success', remove: 'warning' },
];
