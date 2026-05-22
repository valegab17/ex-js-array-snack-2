const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

/* Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] . */
const apiLocale = 'http://localhost:3333'

const testArray = [2, 13, 7, 21, 19];

const fetchJson = async (url) => {
    const res = await fetch(url)
    const obj = await res.json()
    return obj
};

const getBooks = async (ids) => {
    try {
        const promise = ids.map(ta => fetchJson(`${apiLocale}/books/${ta}`));
        const fetchedBooks = await Promise.all(promise)
        return fetchedBooks
    } catch (error) {
        throw new Error(`errore recupero dati: ${error.message}`)
    }
}

getBooks(testArray)
.then(b=>console.log(b))
.catch(err=> console.error(err))
