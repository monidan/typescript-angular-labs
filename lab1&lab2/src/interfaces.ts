import {Category} from './enums';

interface CustomWorker {
  id: number;
  name: string;
  surname: string;
  available: boolean;
  salary: number;
  category: Category;
}

interface PrizeLogger {
  (prize: string): void;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

export {
  CustomWorker,
  PrizeLogger,
  Author,
  Librarian
};