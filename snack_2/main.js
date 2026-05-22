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

/* 
Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
 */

//uso il filter per determinare i libri disponibili 
const availableBooks = books.filter(b => b.available);
console.log(availableBooks);

//uso il map per dare un 20% di sconto 
const discountedBooks = availableBooks.map((b) => {
    const price = parseFloat(b.price.replace('€', ''));
    const dicountedPrice = (price * .8).toFixed(2)
    return {
        ...b,
        price: dicountedPrice + '€'
    }
});
console.log(discountedBooks);

//trovo il libro con prezzo intero 

const fullPricedBook = discountedBooks.find(book => {
    const discountedPrice = parseFloat(book.price);
    return discountedPrice % 1 === 0;
})
console.log("Il primo libro scontato con prezzo intero:", fullPricedBook);
