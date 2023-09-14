import { Component, Input } from '@angular/core';
import { List } from '../list.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() sia: List;
  @Input() itemIndex: number;

  constructor(private itemsService: ItemsService) {}
  onDeleteItem(){
    this.itemsService.deleteItem(this.itemIndex)
  }

  onItemDone(){
    this.itemsService.finishItem(this.itemIndex)
  }
}
