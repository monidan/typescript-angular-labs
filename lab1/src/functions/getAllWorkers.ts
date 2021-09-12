import CustomWorker from "../interfaces";
import { Category } from "../enums";

export default function getAllWorkers(): CustomWorker[] {
  let workers = [
    {
      id: 1,
      name: 'Ivan',
      surname: 'Ivanov',
      available: true,
      salary: 1000,
      category: Category.BA
    },
    {
      id: 2,
      name: 'Petro',
      surname: 'Petrov',
      available: true,
      salary: 1500,
      category: Category.Designer
    },
    {
      id: 3,
      name: 'Vasyl',
      surname: 'Vasyliev',
      available: false,
      salary: 1600,
      category: Category.SM
    },
    {
      id: 4,
      name: 'Evgen',
      surname: 'Zhukov',
      available: true,
      salary: 1300,
      category: Category.Developer
    },
  ]

  return workers;
}
