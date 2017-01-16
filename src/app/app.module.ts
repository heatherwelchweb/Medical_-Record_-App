import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientInfoComponent } from './patient/patient-details/patient-info/patient-info.component';
import { MedicalHistoryComponent } from './patient/patient-details/medical-history/medical-history.component';
import { ControlsComponent } from './patient/patient-details/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientInfoComponent,
    MedicalHistoryComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
