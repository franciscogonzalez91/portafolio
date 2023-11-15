import { Injectable, OnInit } from '@angular/core';
import { clientsJson } from 'src/jsonDB/clients';
import { Client } from '../models/client.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements OnInit {
  private clients: Client[] = [];

  constructor() { }
  ngOnInit(): void {
    
  }

  getClients(): Observable<Client[]>{
    this.clients = clientsJson.clients_ES;
    return of(this.clients);
  }
}
