import { Author, Librarian } from '../interfaces';

const favoriteAuthor: Author = {
  name: 'Daniel',
  email: 'horokhov@gmail.com',
  numBooksPublished: 3
} 

const favoriteLibrarian: Librarian = {
  name: 'Kate',
  email: 'kate@gmail.com',
  department: 'Tech science',
  assistCustomer: (custName: string) => console.log(`Customer name ${custName}`)
}

export {
  favoriteAuthor,
  favoriteLibrarian
}