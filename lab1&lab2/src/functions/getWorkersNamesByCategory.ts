import {Category} from '../enums';
import {CustomWorker} from '../interfaces';

export default function getWorkersNamesByCategory(workers: CustomWorker[], category = Category.Designer): string[] | void {
  return workers
    .filter((worker: CustomWorker) => worker.category === category)
    .map((worker: CustomWorker) => {
      if (worker.category === category) {
        return worker.surname;
      }
    })
}
