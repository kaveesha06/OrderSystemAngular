import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayLoadTestComponent } from './gateway-load-test.component';

describe('GatewayLoadTestComponent', () => {
  let component: GatewayLoadTestComponent;
  let fixture: ComponentFixture<GatewayLoadTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewayLoadTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayLoadTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
