import { Category } from '../enums';
import {CustomWorker} from '../interfaces';

export const logDevs = (workers: CustomWorker[]): void => {
  workers.forEach((worker: CustomWorker) => {
    if (worker.category === Category.Developer) {
      console.log(`Name: ${worker.name}; Surname: ${worker.surname};`)
    }
  })
} 

export const getWorkerById = (workers: CustomWorker[], id: number): {name: string, surname: string, available: boolean, salary: number} => {
  const {name, surname, available, salary} = workers.find((worker: CustomWorker) => worker.id === id);
  return {name, surname, available, salary};
}