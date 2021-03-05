import {
  AfterViewChecked,
  Component,
  Input,
  Output,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';

import * as feather from 'feather-icons';


import { taskManagerService } from '../../tasks.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements AfterViewChecked{
  @Input()
    taskItems:any = [];
  @Output()
    onTaskListCreate: EventEmitter<any> = new EventEmitter();


    @ViewChild("dynamicInput", { static: false }) itemInputFiled: ElementRef;
    editing:Boolean = false;


  constructor(private taskManagerService: taskManagerService) {}

  addItem = () => {
    this.editing = true;

    setTimeout(() => {
      this.itemInputFiled.nativeElement.focus();
    }, 0)
  }

  onEnter = (val) => {
    if(val) this.taskManagerService.createTaskList({'title' : val}).subscribe((res) => {
      if(!res) return
      this.onTaskListCreate.emit(res);
      this.editing = false
    })
  }

ngAfterViewChecked() {
  feather.replace();
}

}
