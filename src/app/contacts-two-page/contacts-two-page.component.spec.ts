import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsTwoPageComponent } from './contacts-two-page.component';

describe('ContactsTwoPageComponent', () => {
  let component: ContactsTwoPageComponent;
  let fixture: ComponentFixture<ContactsTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
