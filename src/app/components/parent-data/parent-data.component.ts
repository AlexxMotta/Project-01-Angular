import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  //o name precisa de um inicializador
  @Input() name: string = '';
  @Input() tv!: { brand: string; size: number; on: boolean };
  constructor() {}

  ngOnInit(): void {}
}
