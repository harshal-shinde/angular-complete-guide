import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;
  editMode =false;
  editItemIndex:number;
  editedItem:Ingredient
  
  constructor(private slService: ShoppinListService) {}
  @ViewChild('f') shoppingListForm: NgForm;

  ngOnInit(): void {
     this.subscription = this.slService.startEditing
      .subscribe((index:number)=> {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.shoppingListForm.setValue({
          name : this.editedItem.name,
          amount: this.editedItem.amount
        });
      })
  }

  onAddItem(form: FormControl){
    event.preventDefault();
    const value = form.value;
    const ingName = value.name;
    const ingAmount = value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
    if(this.editMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    }else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode =false;
    form.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
