import {Category} from './enums';

export default interface CustomWorker {
  id: number;
  name: string;
  surname: string;
  available: boolean;
  salary: number;
  category: Category;
};