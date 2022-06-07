import { HTMLElements, MessagesType } from "./utils";

// FIXME: 만일 class 종류가 늘어난다면? 어떻게하면 변경에 유연하게 대처할 수 있을까
export function paintToastMessage(obj: MessagesType): HTMLParagraphElement {
  const { messageAlert } = HTMLElements();
  messageAlert.innerText = obj.text;
  messageAlert.classList.remove(obj.remove);
  messageAlert.classList.add(obj.add);

  return messageAlert;
}

export function resetToastMessage() {
  const { messageAlert } = HTMLElements();

  messageAlert.innerText = '';
  messageAlert.classList.remove('success');
  messageAlert.classList.remove('warning');
}
