import { CorporateApiService } from 'src/app/services/corporate-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corp-cust-info',
  templateUrl: './corp-cust-info.component.html',
  styleUrls: ['./corp-cust-info.component.css'],
})
export class CorpCustInfoComponent implements OnInit {
  corpotareCustomerInfo: any = {};
  corporateCustomerHistory: any = [];
  constructor(
    private corporateApiService: CorporateApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getInfoForCoprpCust();
  }

  getInfoForCoprpCust() {
    this.corporateApiService
      .getCorporateCustomerInfo(this.route.snapshot.params.id)
      .subscribe((res: any) => {
        this.corpotareCustomerInfo = res.Corporate;
        this.corporateCustomerHistory = res.History;
        console.log(this.corpotareCustomerInfo);
        console.log(res.History);
      });
  }
}
