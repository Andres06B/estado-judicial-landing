import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Team } from './components/team/team';
import { Coverage } from './components/coverage/coverage';
import { Customers } from './components/customers/customers';
import { Contact } from './components/contact/contact';


@Component({
  selector: 'app-home',
  imports: [Hero, Services, Team, Coverage,Customers,Contact ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
