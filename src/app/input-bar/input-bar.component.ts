import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss']
})
export class InputBarComponent implements OnInit{
  constructor(private itemService: ItemsService) {}
  ngOnInit() {}

  onNewItem(writeText: HTMLInputElement) {
    this.itemService.addItem(writeText.value);
    writeText.value = "";
  }
}
