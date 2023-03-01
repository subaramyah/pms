/**
 * @returns Authentication service to REST API
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_URL } from '../config/URL.config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
 })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = '';
  private role = '';
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

  // getters and setters
  public set AuthenticationToken(token: string) {
    this.token = token;
  }

  public get AuthenticationToken(): string {
    return this.token;
  }

  public set UserRole(role: string) {
    this.role = role;
  }

  public get UserRole(): string {
    return this.role;
  }

  public set IsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

  public get IsAuthenticated(): boolean {
    if (this.token === '') {
      this.isAuthenticated = false;
    }
    else {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

  // Sends data to AUTH API and Receives token and other data
}
