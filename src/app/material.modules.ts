import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon"; // <----- Here
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
    imports: [
        //Agnular Material
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        //MatTabsModule,
        MatTableModule
         
        
    ],
    exports: [
        
    ]
})
export class MaterilaModule { }