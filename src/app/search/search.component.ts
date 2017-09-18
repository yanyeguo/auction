import { ProductServiceService } from './../shared/product-service/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  categories: string[];

  constructor(private productService: ProductServiceService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', [Validators.minLength(3), Validators.required]],
        price: [null, this.positiveNumberValidator],
        category: ['-1']

    });
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    // console.log(control.value);
    let price = parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return { positiveNumber: true };
    }
  }
  ngOnInit() {
    this.categories = this.productService.getCategries();
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }

  }
}
