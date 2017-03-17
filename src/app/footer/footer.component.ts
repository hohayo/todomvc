import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  todos: any[];

  @Output()
  clearCompleted = new EventEmitter();

  filterType = 'All';

  @Output()
  filterTypeChange = new EventEmitter<string>();

  constructor () { }

  ngOnInit () {
  }

  clearBtnClick () {
    this.clearCompleted.emit();
  }

  changeFilterType (type: string) {
    this.filterType = type;
    this.filterTypeChange.emit(type);
  }

  haveComplete () {
    return this.todos.filter(item => { return item.done; }).length > 0;
  }

}
