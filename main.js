const form = document.querySelector('.form');
const title = document.getElementById('title'),
    author = document.getElementById('author'),
    year = document.getElementById('year'),
    book = document.getElementById('bokk-list')
    btn = document.getElementById('btn'); 

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const titleName = title.value
    const authorName = author.value
    const yearName = year.value
    if (titleName == '' && authorName == '' && yearName == '') {
        year.classList.add('warning')
        title.classList.add('warning')
        author.classList.add('warning')
    }else {
        year.classList.remove('warning')
        title.classList.remove('warning')
        author.classList.remove('warning')

        const newRow = document.createElement('tr')

        const newTitle = document.createElement('th')
        newTitle.innerHTML = titleName
        newRow.appendChild(newTitle)

        const newAutor = document.createElement('th')
        newAutor.innerHTML = authorName
        newRow.appendChild(newAutor)

        const dataYear = document.createElement('th')
        dataYear.innerHTML = yearName
        newRow.appendChild(dataYear)

        book.appendChild(newRow);

    }

    
    
    

    form.reset()

})
