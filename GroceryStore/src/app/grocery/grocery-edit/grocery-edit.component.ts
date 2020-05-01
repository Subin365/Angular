import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GroceryService } from '../grocey.service';

@Component({
  selector: 'app-grocery-edit',
  templateUrl: './grocery-edit.component.html',
  styleUrls: ['./grocery-edit.component.css']
})
export class GroceryEditComponent implements OnInit {
  id: number;
  editMode = false;
  listForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private groceryService: GroceryService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.formInit();
      }
    )
  }
  private formInit() {
    let listName = '';
    let listImagePath = '';
    let listDescription = '';
    let listItem = new FormArray([]);

    if (this.editMode) {
      const grocery = this.groceryService.getGroceryById(this.id)
      listName = grocery.name;
      listImagePath = grocery.imagePath;
      listDescription = grocery.description;
      if (grocery.listItem) {
        for (let items of grocery.listItem) {
          listItem.push(
            new FormGroup({
              'name': new FormControl(items.name, Validators.required),
              'amount': new FormControl(items.amount, [
                Validators.pattern(/^[1-9]+[0-9]*$/), Validators.required
              ])
            })
          )
        }
      }
    }

    this.listForm = new FormGroup({
      'name': new FormControl(listName, Validators.required),
      'imagePath': new FormControl(listImagePath, Validators.required),
      'description': new FormControl(listDescription, Validators.required),
      'listItem': listItem
    });
  }
  onSubmit() {
    if (this.editMode) (
      this.groceryService.updateGrocery(this.id, this.listForm.value)
    )
    else {
      this.groceryService.addGroceryList(this.listForm.value)
      console.log(this.listForm.value)
    }
    this.onCancel();
  }
  get controls() { // a getter!
    return (<FormArray>this.listForm.get('listItem')).controls;
  }
  onAddIngredient() {
    (<FormArray>this.listForm.get('listItem')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.pattern(/^[1-9]+[0-9]*$/), Validators.required
        ])
      })
    )
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onDeleteIngredient(index:number){
     (<FormArray>this.listForm.get('listItem')).removeAt(index);
  }
}
