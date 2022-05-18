let count: number = 0;

const countElement = document.getElementById('count') as HTMLElement;
const countElementUpdate = () => {
    if(countElement === null) return
    countElement.innerText = String(count)
};

countElementUpdate();
const buttonWrapper = document.getElementById("button-wrapper") as HTMLElement;
buttonWrapper.addEventListener("click", (e) => {
    let target = e.target as HTMLElement;
    if(target.id === 'button-decrease') {
        count = count > 0 ? count - 1 : 0
        countElementUpdate();
    } else if(target.id === 'button-reset') {
        count = 0;
        countElementUpdate();
    } else if(target.id === 'button-increase') {
        count++;
        countElementUpdate();
    }
})