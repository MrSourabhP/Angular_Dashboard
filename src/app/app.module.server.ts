import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
