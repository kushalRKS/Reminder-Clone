import { Component, OnChanges, Input} from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnChanges {

  @Input()
    item:any;

  constructor() { }

  ngOnChanges(): void {
    feather.replace();
  }

}
