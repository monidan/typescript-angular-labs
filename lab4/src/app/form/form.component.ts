import { Component } from '@angular/core';

import CustomWorker from '../interfaces/CustomWorker';

@Component({
  selector: 'custom-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  worker: CustomWorker = {
    fullName: '',
    salary: '',
  }
  workers: CustomWorker[] = [];
  highestPayedWorker: CustomWorker = {
    fullName: '',
    salary: '',
  };

  addWorker() {
    if (this.worker.fullName && this.worker.salary) {
      this.workers.push(this.worker);
      this.findHighestPayedWorker();
      this.clearInputs();
    } else {
      console.error('error in input!')
    }
  }

  clearInputs() {
    this.worker = {
      fullName: '',
      salary: '',
    }
  }

  findHighestPayedWorker() {
    this.workers.map(worker => {
      if (!isNaN(parseInt(this.highestPayedWorker.salary, 10))) {
        if (parseInt(this.highestPayedWorker.salary, 10) <= parseInt(worker.salary, 10)) {
          this.highestPayedWorker = worker;
        }
      } else {
        if (!isNaN(parseInt(worker.salary))) {
          this.highestPayedWorker = worker;
        }
      }
    })
  }
}
