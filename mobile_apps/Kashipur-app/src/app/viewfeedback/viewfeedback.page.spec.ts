import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewfeedbackPage } from './viewfeedback.page';

describe('ViewfeedbackPage', () => {
  let component: ViewfeedbackPage;
  let fixture: ComponentFixture<ViewfeedbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfeedbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewfeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
