import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestHeaderComponent } from './test-header/test-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestHeaderComponent
  ],
  imports: [],
  exports: [
    TestHeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
