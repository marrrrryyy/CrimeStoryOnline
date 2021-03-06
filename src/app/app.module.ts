import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { NameComponent } from './name/name.component';
import { CrimeSceneComponent } from './crime-scene/crime-scene.component';
import { InfoCrimeComponent } from './info-crime/info-crime.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { SuspectAComponent } from './suspect-a/suspect-a.component';
import { SuspectBComponent } from './suspect-b/suspect-b.component';
import { AutopsyComponent } from './autopsy/autopsy.component';
import { ProblemComponent } from './problem/problem.component';
import { PicturesSceneComponent } from './pictures-scene/pictures-scene.component';
import { ListLabComponent } from './list-lab/list-lab.component';
import { CallPartnerComponent } from './call-partner/call-partner.component';
import { HintComponent } from './hint/hint.component';
import { ProblemSolvedComponent } from './problem-solved/problem-solved.component';
import { QuestioningComponent } from './questioning/questioning.component';
import { QuestioningAComponent } from './questioning-a/questioning-a.component';
import { QuestioningBComponent } from './questioning-b/questioning-b.component';
import { SummaryAComponent } from './summary-a/summary-a.component';
import { SummaryBComponent } from './summary-b/summary-b.component';
import { LabResultComponent } from './lab-result/lab-result.component';
import { SummaryComponent } from './summary/summary.component';
import { HowComponent } from './how/how.component';
import { WhoComponent } from './who/who.component';
import { EndComponent } from './end/end.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MenuComponent,
    InfoComponent,
    NameComponent,
    CrimeSceneComponent,
    InfoCrimeComponent,
    SuspectsComponent,
    SuspectAComponent,
    SuspectBComponent,
    AutopsyComponent,
    ProblemComponent,
    PicturesSceneComponent,
    ListLabComponent,
    CallPartnerComponent,
    HintComponent,
    ProblemSolvedComponent,
    QuestioningComponent,
    QuestioningAComponent,
    QuestioningBComponent,
    SummaryAComponent,
    SummaryBComponent,
    LabResultComponent,
    SummaryComponent,
    HowComponent,
    WhoComponent,
    EndComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
       { path: '', component: MenuComponent},
      // { path: 'menu', component: MenuComponent},
      // { path: 'start', component: StartComponent},
      // { path: 'info', component: InfoComponent},
      // { path: 'name', component: NameComponent},
      // { path: 'crime-scene', component: CrimeSceneComponent},
      // { path: 'info-crime', component: InfoCrimeComponent},
      // { path: 'suspects', component: SuspectsComponent},
      // { path: 'suspect-a', component: SuspectAComponent},
      // { path: 'suspect-b', component: SuspectBComponent},
      // { path: 'autopsy', component: AutopsyComponent},
      // { path: 'problem', component: ProblemComponent},
      // { path: 'pictures-scene', component: PicturesSceneComponent},
      // { path: 'list-lab', component: ListLabComponent},
      // { path: 'call-partner', component: CallPartnerComponent},
      // { path: 'hint', component: HintComponent},
      // { path: 'problem-solved', component: ProblemSolvedComponent},
      // { path: 'questioning', component: QuestioningComponent},
      // { path: 'questioning-a', component: QuestioningAComponent},
      // { path: 'questioning-b', component: QuestioningBComponent},
      // { path: 'summary-a', component: SummaryAComponent},
      // { path: 'summary-b', component: SummaryBComponent},
      // { path: 'lab-result', component: LabResultComponent},
      // { path: 'summary', component: SummaryComponent},
      // { path: 'how', component: HowComponent},
      // { path: 'who', component: WhoComponent},
      // { path: 'end', component: EndComponent},

      { path: 'CrimeStoryOnline/', component: MenuComponent},
      { path: 'CrimeStoryOnline/menu', component: MenuComponent},
      { path: 'CrimeStoryOnline/start', component: StartComponent},
      { path: 'CrimeStoryOnline/info', component: InfoComponent},
      { path: 'CrimeStoryOnline/name', component: NameComponent},
      { path: 'CrimeStoryOnline/crime-scene', component: CrimeSceneComponent},
      { path: 'CrimeStoryOnline/info-crime', component: InfoCrimeComponent},
      { path: 'CrimeStoryOnline/suspects', component: SuspectsComponent},
      { path: 'CrimeStoryOnline/suspect-a', component: SuspectAComponent},
      { path: 'CrimeStoryOnline/suspect-b', component: SuspectBComponent},
      { path: 'CrimeStoryOnline/autopsy', component: AutopsyComponent},
      { path: 'CrimeStoryOnline/problem', component: ProblemComponent},
      { path: 'CrimeStoryOnline/pictures-scene', component: PicturesSceneComponent},
      { path: 'CrimeStoryOnline/list-lab', component: ListLabComponent},
      { path: 'CrimeStoryOnline/call-partner', component: CallPartnerComponent},
      { path: 'CrimeStoryOnline/hint', component: HintComponent},
      { path: 'CrimeStoryOnline/problem-solved', component: ProblemSolvedComponent},
      { path: 'CrimeStoryOnline/questioning', component: QuestioningComponent},
      { path: 'CrimeStoryOnline/questioning-a', component: QuestioningAComponent},
      { path: 'CrimeStoryOnline/questioning-b', component: QuestioningBComponent},
      { path: 'CrimeStoryOnline/summary-a', component: SummaryAComponent},
      { path: 'CrimeStoryOnline/summary-b', component: SummaryBComponent},
      { path: 'CrimeStoryOnline/lab-result', component: LabResultComponent},
      { path: 'CrimeStoryOnline/summary', component: SummaryComponent},
      { path: 'CrimeStoryOnline/how', component: HowComponent},
      { path: 'CrimeStoryOnline/who', component: WhoComponent},
      { path: 'CrimeStoryOnline/end', component: EndComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
