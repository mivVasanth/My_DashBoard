import { NgModule } from "@angular/core";
import { MatButtonModule} from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
    exports : [
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatIconModule,
  MatCardModule
    ]
})

export class MeterialModule{

}