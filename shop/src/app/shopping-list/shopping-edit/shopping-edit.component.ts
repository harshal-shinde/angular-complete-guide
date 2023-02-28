import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef :ElementRef;
  @ViewChild('amountInput') amountInputRef :ElementRef;

  //This will emmit event out side i.e to  shopping-list
  // @Output() ingredeintAdded = new EventEmitter<{name:String, amount:Number}>();

  constructor(private slService: ShoppinListService) {

   }

  ngOnInit(): void {
  }

  onAddItem(){
    event.preventDefault();
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // this.ingredeintAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
