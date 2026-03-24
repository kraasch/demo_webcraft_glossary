import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythemeswitchComponent } from './mythemeswitch.component';

describe('MythemeswitchComponent', () => {
  let component: MythemeswitchComponent;
  let fixture: ComponentFixture<MythemeswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MythemeswitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MythemeswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
