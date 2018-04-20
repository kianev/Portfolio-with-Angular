import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFrontendComponent } from './skills-frontend.component';

describe('SkillsFrontendComponent', () => {
  let component: SkillsFrontendComponent;
  let fixture: ComponentFixture<SkillsFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
