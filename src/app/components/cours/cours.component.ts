import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatTable} from '@angular/material/table';
import {MatListItem} from '@angular/material/list';
import {MatChipRow} from '@angular/material/chips';
import {MatExpansionPanelActionRow} from '@angular/material/expansion';

import {MatGridList, MatGridListModule, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-cours',
  imports: [
    RouterLink,
    MatChipRow,

    MatGridTile,
    MatGridList,


  ],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {

}


