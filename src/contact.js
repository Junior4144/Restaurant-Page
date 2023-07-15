

const createContactPage  = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const contactFirst = document.createElement('div');
    contactFirst.classList.add('contact-Owner-1');
    
    const firstHeader = document.createElement('h2');
    firstHeader.textContent = "Owner 1";

    contactFirst.appendChild(firstHeader);

    const firstText = document.createElement('p');
    firstText.textContent = 'Phone: 123-456-7890'

    
    contactFirst.appendChild(firstHeader);
    contactFirst.appendChild(firstText);

    pageContent.appendChild(contactFirst);

    content .appendChild(pageContent);
    
}
export default createContactPage;