import getAllWorkers from './functions/getAllWorkers';
import getWorkersNamesByCategory from './functions/getWorkersNamesByCategory';
import logFirstAvailable from './functions/logFirstAvailable';
import logWorkersNames from './functions/logWorkersNames';
import {
  logDevs,
  getWorkerById
} from './functions/arrowFunctions';
import { createCustomerId } from './functions/createCustomerId';
import createCustomer from './functions/createCustomer';
import checkoutWorkers from './functions/checkoutWorkers';

import { Category } from './enums';
import CustomWorker from './interfaces';

// ! 1.1
// logFirstAvailable(getAllWorkers());

// ! 1.2
// console.log(getWorkersNamesByCategory(getAllWorkers(), Category.Developer))

// ! 1.3
// console.log(getWorkerById(getAllWorkers(), 2));

// ! 1.4
// (function() {
//   const myID = createCustomerId('Ann', 10);
//   let idGenerator: typeof createCustomerId = (customerName: string, customerId: number): string => {
//     return `${customerName} - ${customerId}`;
//   }; 

//   idGenerator = createCustomerId;

//   console.log('My Id: ', myID);
//   console.log('Id generator:', idGenerator('Daniel', 12))
// })()

// ! 1.5
(function() {
  createCustomer('Daniel');
  createCustomer('Daniel', 19);
  createCustomer('Daniel', 19, 'Kyiv');

  console.log(getWorkersNamesByCategory(getAllWorkers()));
  logFirstAvailable();
  
  const myWorkers = checkoutWorkers('Ann', 1, 2, 4);

  myWorkers.forEach((worker: {name: string, surname: string}, index) => {
      console.log(`${index + 1}. Worker ${worker.name} ${worker.surname}`);
  })
})()