import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoApiRequestPageComponent } from './bo-api-request-page.component';

describe('BoApiRequestPageComponent', () => {
  let component: BoApiRequestPageComponent;
  let fixture: ComponentFixture<BoApiRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoApiRequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoApiRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
