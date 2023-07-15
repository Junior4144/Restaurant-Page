
const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const menu = document.createElement('div');
    menu.classList.add('menu');

    const firstItem = document.createElement('div');
    firstItem.classList.add('item');
    firstItem.textContent = 'firstItem';
    
    menu.appendChild(firstItem);

    
    pageContent.appendChild(menu);
    
    content.appendChild(pageContent);

}

export default createMenuPage;