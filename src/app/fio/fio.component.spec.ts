import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIOComponent } from './fio.component';

describe('FIOComponent', () => {
  let component: FIOComponent;
  let fixture: ComponentFixture<FIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
