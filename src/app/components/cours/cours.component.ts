import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatTable} from '@angular/material/table';
import {MatListItem} from '@angular/material/list';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-cours',
  imports: [
    RouterLink,
    MatGridTile,
    MatGridList,


  ],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {

}
