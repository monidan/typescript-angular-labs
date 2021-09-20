import CustomWorker from "../interfaces";

import getAllWorkers from "./getAllWorkers";

export default function logFirstAvailable(workers = getAllWorkers()): void {
  console.log(`Amount of workers: ${workers.length}`);
  for (let worker of workers) {
    if (worker.available) {
      console.log(`Available worker's name and surname: ${worker.name} ${worker.surname}`);
    }
  }
}
