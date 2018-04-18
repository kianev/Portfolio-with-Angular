import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectEditFormComponent } from './admin-project-edit-form.component';

describe('AdminProjectEditFormComponent', () => {
  let component: AdminProjectEditFormComponent;
  let fixture: ComponentFixture<AdminProjectEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
