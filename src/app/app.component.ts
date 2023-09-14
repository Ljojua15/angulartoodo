import { Component, OnInit } from '@angular/core';
import { List } from './list.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
items: List[];

  constructor(private itemService: ItemsService ){}

  ngOnInit(){
    this.items = this.itemService.getItems();
  }

  // onAddItem(axaliAgwera: string){
  //   this.items.unshift({agwera: axaliAgwera, shedegi: true});
  // }
}
