import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBackendComponent } from './skills-backend.component';

describe('SkillsBackendComponent', () => {
  let component: SkillsBackendComponent;
  let fixture: ComponentFixture<SkillsBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
