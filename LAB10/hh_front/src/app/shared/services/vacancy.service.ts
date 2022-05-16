import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vacancy } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getVacancies(vacancy_id: number): Observable<vacancy[]> {
    return this.http.get<vacancy[]>(`${this.BASE_URL}/api/companies/${vacancy_id}/vacancies`)
  }

  deleteVacancy(vacancy_id: number): Observable<any>{
    return this.http.delete(`${this.BASE_URL}/api/vacancies/${vacancy_id}`)
  }
}
