import { Component, OnInit } from '@angular/core'
import { Expansion } from '../../models/expansion.model';

@Component({
  selector: 'cf-expansion-picker',
  templateUrl: './expansion-picker.component.html',
})
export class ExpansionPickerComponent implements OnInit {
  expansions: Expansion[];

  constructor() {}

  ngOnInit(): void {
  }
}
