const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];

const articleList = document.querySelector('.article__list');

const listContainer = document.createElement('ul');
articleList.appendChild(listContainer);

list.forEach(item => {
    if(item.parentId === null) {
        const listItem = document.createElement('li');
        listItem.dataset.id = item.id;
        const listItemLink = document.createElement('a');
        listItemLink.setAttribute('href', item.link);
        listItemLink.textContent = item.text;
        listItem.appendChild(listItemLink);
        listContainer.appendChild(listItem);
    }
})

mainTitles = listContainer.querySelectorAll('li');

mainTitles.forEach(item => {
    console.log(item);
    const id = Number(item.dataset.id);
    const children = list.filter(listEl => {
        return listEl.parentId === id;
    })
    const innerList = document.createElement('ul');
    children.forEach(child => {
        const innerListItem = document.createElement('li');
        const innerListItemLink = document.createElement('a');
        innerListItemLink.setAttribute('href', child.link);
        innerListItemLink.innerText = child.text;
        innerListItem.appendChild(innerListItemLink);
        innerList.appendChild(innerListItem);
        console.log(innerList)
    })
    item.appendChild(innerList);
})
