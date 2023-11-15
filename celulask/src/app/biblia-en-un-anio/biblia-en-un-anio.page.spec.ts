import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BibliaEnUnAnioPage } from './biblia-en-un-anio.page';

describe('BibliaEnUnAnioPage', () => {
  let component: BibliaEnUnAnioPage;
  let fixture: ComponentFixture<BibliaEnUnAnioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliaEnUnAnioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BibliaEnUnAnioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
