import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IDoesFilterPassParams, IFilterComp } from "ag-grid-community";

@Component({
  selector: 'app-cell-filter',
  templateUrl: './cell-filter.component.html',
  styleUrls: ['./cell-filter.component.scss']
})
export class CellFilterComponent implements OnInit, IFilterComp, AfterViewInit   {
  @ViewChild('i') textInput;

  filter = '';
  params: any;
  selectedFilter = 'left';
  colDefs: string[] = ['_id', 'name', 'type', 'sku', 'brand', 'supplier', 'dimensions', 'weight', 'stockOnHand', 'availableStock', 'description', 'fitment', 'link' ];

  constructor() { }

  public onFilterChange(filter: string) {
    this.selectedFilter = filter;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.textInput.nativeElement.focus();
    });
  }

  agInit(params: any): void {
    this.params = params;
  }

  onSubmit(event) {
    event.preventDefault();

    const filter = event.target.elements.filter.value;

    if (this.filter !== filter) {
      this.filter = filter;

      /* notify the grid about the change */
      this.params.filterChangedCallback();
    }
  }

  isFilterActive() {
    return this.filter !== '';
  }

  doesFilterPass(params) {
    const filter = this.filter.split('-');
    const gt = Number(filter[0]);
    const lt = Number(filter[1]);
    const value = this.params.valueGetter(params.node);

    return value >= gt && value <= lt;
  }

  getGui(): HTMLElement {
    return undefined;
  }

  getModel() {
    return {filter: this.filter};
  }

  setModel(model) {
    this.filter = model ? model.filter : '';
  }

}
