import {CustomWorker} from "../interfaces";

export default function printWorker(worker: CustomWorker) {
  console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`)
}