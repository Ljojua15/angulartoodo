
import { List } from "./list.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ItemsService{
  items: List[] = [
    {agwera: '123', shedegi: true},
    {agwera: '345', shedegi: true},
  ];

  private saveItems(){
    localStorage.setItem('todos', JSON.stringify(this.items));
  }

  getItems(){
    const todoItems = localStorage.getItem('todos')
    if (todoItems){
      this.items = JSON.parse(todoItems)
    }
    return this.items
  }

  addItem(axaliAgwera: string){
    this.items.unshift({agwera: axaliAgwera, shedegi: true});
    this.saveItems();
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
    this.saveItems();
  }

  finishItem(index: number){
    this.items[index].shedegi = !this.items[index].shedegi
    this.saveItems();
  }
}
