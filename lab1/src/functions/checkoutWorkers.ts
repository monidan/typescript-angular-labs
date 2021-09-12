import getAllWorkers from './getAllWorkers';
import { getWorkerById } from './arrowFunctions';

const workers = getAllWorkers();

export default function checkoutWorkers(customer: string, ...workerIDs: number[]): {name: string, surname: string}[]  {
  console.log("Customer's name:", customer);

  return workerIDs
    .filter((workerId: number) => getWorkerById(workers, workerId).available)
    .map((workerId: number) => {
      const worker = getWorkerById(workers, workerId);

      if (worker.available) {
        return {name: worker.name, surname: worker.surname}
      }
    })
}