import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsOnePageComponent } from './contacts-one-page.component';

describe('ContactsOnePageComponent', () => {
  let component: ContactsOnePageComponent;
  let fixture: ComponentFixture<ContactsOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
