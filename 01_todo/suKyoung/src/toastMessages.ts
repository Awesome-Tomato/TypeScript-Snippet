import { HTMLElements } from "./index.js";

// FIXME: enum을 사용하도록 변경
const toastMessageStatus = {
  warning: 'warning',
  success: 'success',
  // 변경사항 있을 시, 여기를 변경
};

export function paintToastMessage(text: string, status: any): void {
  const { messageAlert } = HTMLElements();
  setToastContent(messageAlert, text);
  setToastStatus(messageAlert, status);

  const STATUS = Object.values(toastMessageStatus);
  if (STATUS[status] === 'remove') return removeToastMessage(messageAlert);
}

export function setToastContent(message: HTMLParagraphElement, text: string) {
  return message.innerText = text;
}

export function setToastStatus(message: HTMLParagraphElement, status: string) {
  const removeClass = (cls: string) => message.classList.remove(cls);  
  Object.values(toastMessageStatus).forEach(removeClass);
  return message.classList.add(status);
}

export const removeToastMessage = (message: HTMLParagraphElement) => {
  const removeClass = (cls: string) => message.classList.remove(cls);  
  return Object.values(toastMessageStatus).forEach(removeClass);
}