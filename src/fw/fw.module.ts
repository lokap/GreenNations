import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

@NgModule({
  declarations: [FrameworkBodyComponent,ContentComponent,TitlebarComponent],
  imports: [
    CommonModule
  ],
  exports:[FrameworkBodyComponent]
})
export class FwModule { }
