import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { taskManagerService } from '../../tasks.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  selectedTaskId: any;
  taskListItems: any = [];
  private _taskID: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskManagerService: taskManagerService
  ) {}

  getTaskLists = () => {
    this.taskManagerService.getTaskLists().subscribe(
      (res) => {
        this.taskListItems = res;
        if (this.taskListItems) {
          this.selectedTaskId = this.taskListItems.filter(
            (list) => list._id === this._taskID
          )[0];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  onTaskListCreate = (data) => {
    if(data) this.getTaskLists(); this.router.navigate(['/tasks', data._id ]);
  }

  ngOnInit(): void {
    this._taskID = this.route.snapshot.paramMap.get('id');
    this.getTaskLists();
    this.route.params.subscribe((params) => {
      if (params.id) {
        let taskID = params.id;
        this.selectedTaskId = this.taskListItems.filter(
          (list) => list._id === taskID
        )[0];
      } else {
        this.selectedTaskId = {};
      }
    });
  }
}
