const body = document.querySelector('body');
const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

const js = document.querySelector('#js');
const ruby = document.querySelector('#ruby');
const php = document.querySelector('#php');

let handleTabClick = (event) => {
    // hide all tab panels
    tabPanels.forEach((panel) => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach((tab) => {
        // tab.ariaSelected = false;
        tab.setAttribute('selected', false);
    });
    event.currentTarget.setAttribute('selected', true);
    const { id } = event.currentTarget;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    let arr = [js, ruby, php];
    for (let i = 0; i < arr.length; i++) {
        if (arr[0].attributes.selected.nodeValue == 'true') {
            body.classList.add('yellow');
            body.classList.remove('red');
            body.classList.remove('blue');
        } else if (arr[1].attributes.selected.nodeValue == 'true') {
            body.classList.add('red');
            body.classList.remove('yellow');
            body.classList.remove('blue');
        } else if (arr[2].attributes.selected.nodeValue == 'true') {
            body.classList.add('blue');
            body.classList.remove('red');
            body.classList.remove('yellow');
        }
    }
    tabPanel.hidden = false;
};
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', handleTabClick);
});
const images = document.querySelectorAll('.image');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const modalImg = document.querySelector('.modal-img');

images.forEach((img) => {
    img.addEventListener('click', () => {
        body.classList.add('scroll-disable');
        modal.style.display = ' flex';
        modalImg.src = img.src;
        modalImg.style.animation = 'fromHide .3s';
    });
});
let closeModal = () => {
    modal.style.display = 'none';
    body.classList.remove('scroll-disable');
};
closeBtn.addEventListener('click', closeModal);
