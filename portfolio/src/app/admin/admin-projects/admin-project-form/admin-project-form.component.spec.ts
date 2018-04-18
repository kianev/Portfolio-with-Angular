import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectFormComponent } from './admin-project-form.component';

describe('AdminProjectFormComponent', () => {
  let component: AdminProjectFormComponent;
  let fixture: ComponentFixture<AdminProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
