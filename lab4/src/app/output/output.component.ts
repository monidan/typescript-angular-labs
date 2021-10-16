import { Component, Input } from '@angular/core';


@Component({
  selector: 'output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Input() fullName: string = '';
  @Input() salary: string = '';
}
