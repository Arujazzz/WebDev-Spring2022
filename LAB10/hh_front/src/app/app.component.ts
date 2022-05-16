import { Component, OnInit } from '@angular/core';
import { CompanyService } from './shared/services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh_front';

  username = '';
  password = '';
  is_logged = false;

  ngOnInit(){
    const token = localStorage.getItem('token');
    if (token){
      this.is_logged = true;
    }
  }

  constructor(private companyService: CompanyService){}

  login(){
    this.companyService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.is_logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout(){
    this.is_logged = false;
    localStorage.removeItem('token')
  }
}
