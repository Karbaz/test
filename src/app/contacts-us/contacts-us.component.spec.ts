import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsUsComponent } from './contacts-us.component';

describe('ContactsUsComponent', () => {
  let component: ContactsUsComponent;
  let fixture: ComponentFixture<ContactsUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
