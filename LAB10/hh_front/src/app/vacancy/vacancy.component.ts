import { Component, OnInit } from '@angular/core';
import { vacancy } from '../interfaces';
import { VacancyService } from '../shared/services/vacancy.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  vacancies: vacancy[] = [];

  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.vacancyService.getVacancies(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
      })
    })
  }

  remove(id: number){

    this.vacancies = this.vacancies.filter((x) => x.id != id);
    this.vacancyService.deleteVacancy(id).subscribe(() => {
    });
    /* this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.vacancyService.deleteVacancy(id).subscribe((vacancy_id) => {
        this. = vacancy_id;
      })
    }) */
  }
}
