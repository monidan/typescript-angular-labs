import { Librarian } from "../interfaces";

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;

  constructor(name: string, email: string, department: string) {
    this.name = name;
    this.email = email;

    this.department = department;
  }

  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`)
  }
}

abstract class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating new Refernce Item...');

  //   this.title = newTitle;
  //   this.year = newYear;
  // }

  private _publisher: string;
  static department: string = 'tech science';

  constructor(public title: string, protected year: number) {}

  get publisher() {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  printItem() {
    console.log(`${this.title} was published in ${this.year} from ${ReferenceItem.department}`)
  }

  abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
  constructor(public edition: number, title: string, year: number) {
    super(title, year);
  }

  printItem() {
    super.printItem();
    console.log(`Edition: ${this.edition} ${this.year}`)
  }

  printCitation() {
    console.log(`${this.title} - ${this.year}`)
  }
}

export {
  UniversityLibrarian,
  ReferenceItem,
  Encyclopedia
}