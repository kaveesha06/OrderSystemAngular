import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JMSComponent } from './jms.component';

describe('JMSComponent', () => {
  let component: JMSComponent;
  let fixture: ComponentFixture<JMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
