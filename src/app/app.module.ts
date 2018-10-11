import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AvailableProjectsComponent } from './available-projects/available-projects.component';
import { EditableComponent } from './available-projects/editable/editable.component';
import { HomeComponent } from './home/home.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DbServiceService } from './project-services/db-service.service';
import { SuccessPageComponent } from './success-page/success-page.component';
import { EditService } from './project-services/edit.service';
import { SearchComponent } from './search/search.component';
import { SearchDirective } from './search.directive';








const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'details', component: ProjectDetailsComponent
  },
  {
    path: 'available', component: AvailableProjectsComponent
  },
  {
    path: 'available/edit', component: EditableComponent
  },
  {
    path: 'success', component: SuccessPageComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }

];



@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    AvailableProjectsComponent,
    SearchFilterPipe,
    HomeComponent,
    EditableComponent,
    SuccessPageComponent,
    CurrencyPipe,
    SearchComponent,
    SearchDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpModule, EditService, DbServiceService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
