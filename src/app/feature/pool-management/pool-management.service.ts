import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { PoolModel, CreateForm, UpdateForm, UpdateActiveStatusForm } from './common';

@Injectable()
export class PoolManagementService {
  readonly url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    const identityConfig = environment.service.identity;
    this.url = `${identityConfig.url}/pools`;
  }

  getAll(): Observable<PoolModel[]> {
    return this.httpClient.get<PoolModel[]>(this.url);
  }

  getById(id: string): Observable<PoolModel> {
    return this.httpClient.get<PoolModel>(`${this.url}/${id}`);
  }

  create(form: CreateForm): Observable<PoolModel> {
    return this.httpClient.post<PoolModel>(`${this.url}`, form);
  }

  update(id: string, form: UpdateForm): Observable<PoolModel> {
    return this.httpClient.patch<PoolModel>(`${this.url}/${id}`, form);
  }

  disable(id: string): Observable<PoolModel> {
    const form: UpdateActiveStatusForm = { active: false }
    return this.httpClient.patch<PoolModel>(`${this.url}/${id}`, form);
  }

  enable(id: string): Observable<PoolModel> {
    const form: UpdateActiveStatusForm = { active: true }
    return this.httpClient.patch<PoolModel>(`${this.url}/${id}`, form);
  }
}
