import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytileComponent } from './mytile.component';

describe('MytileComponent', () => {
  let component: MytileComponent;
  let fixture: ComponentFixture<MytileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MytileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
