import { Component } from '@angular/core';
import { PeopleTableComponent } from "../../components/people-table/people-table.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [PeopleTableComponent]
})
export class HomeComponent {

}
