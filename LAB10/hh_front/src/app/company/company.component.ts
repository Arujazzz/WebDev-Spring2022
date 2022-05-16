import { Component, OnInit } from '@angular/core';
import { company } from '../interfaces';
import { CompanyService } from '../shared/services/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: company[] = [];

  constructor(private CompanyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.CompanyService.getCompanies().subscribe((data) => {
      //console.log(data);
      this.companies = data;
    })
  }
}
