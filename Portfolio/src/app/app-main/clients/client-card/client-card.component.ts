import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client.model'
import { clientsJson } from 'src/jsonDB/clients';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  clients: Client[] = [];
  actualURL: string = "";
  constructor(private clientsService: ClientService){}

  ngOnInit(){
    this.clientsService.getClients().subscribe(clients => this.clients = clients);
    this.actualURL = window.location.href;
  }
}
