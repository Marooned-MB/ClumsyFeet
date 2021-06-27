import { Component, OnInit } from '@angular/core'
import { Expansion } from '../../models/expansion.model';
import { ExpansionsService } from './expansions.service';

@Component({
  selector: 'cf-expansion-picker',
  templateUrl: './expansion-picker.component.html',
})
export class ExpansionPickerComponent implements OnInit {
  expansions: Expansion[];

  constructor(private expansionsService: ExpansionsService) {}

  ngOnInit(): void {
    this.expansions = this.expansionsService.getExpansions('smok');
  }
}
