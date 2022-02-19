import { DropDownMenusService } from './../../../services/dashboard/drop-down-menus.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-list-of-drop-down-menu',
  templateUrl: './list-of-drop-down-menu.component.html',
  styleUrls: ['./list-of-drop-down-menu.component.css'],
})
export class ListOfDropDownMenuComponent implements OnInit {
  UserID = JSON.parse(localStorage.getItem('user') || '{}').ID;
  lookupsCategory: any = [];
  List = [];
  Page: any = 1;
  PageLimit: any = 20;
  totalCount: any;
  categoryID: any = 1;
  constructor(
    private dropDownMenusService: DropDownMenusService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getDropDownCategory();
    this.listService();
  }

  getDropDownCategory() {
    this.dropDownMenusService.getCategoryLookups().subscribe((res: any) => {
      this.lookupsCategory = res.Categories;
      console.log('result', res);
    });
  }

  categoryChange(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.categoryID = value;
    this.listService();
  }

  onPageChange(event: any) {
    this.Page = event.page + 1;
    this.listService();
  }
  updateStatusList(ID: any) {
    this.dropDownMenusService
      .editLookupStatus(ID, this.UserID)
      .subscribe((res: any) => {
        if (res.status === 'successfully') {
          this.listService();
        }
      });
  }
  listService() {
    this.dropDownMenusService
      .getLookupList(this.Page, this.PageLimit, this.categoryID)
      .subscribe((res: any) => {
        this.List = res.Lookups;
        this.totalCount = res.TotalCount;
        this.cdr.detectChanges();
      });
  }
}
