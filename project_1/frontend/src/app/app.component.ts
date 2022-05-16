import { Component } from '@angular/core';
import { CategoryService } from './shared/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  username = '';
  password = '';
  is_logged = false;

  ngOnInit(){
    const token = localStorage.getItem('token');
    if (token){
      this.is_logged = true;
    }
  }

  constructor(private categoryService: CategoryService){}

  login(){
    this.categoryService.login(this.username, this.password).subscribe((data) => {

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
