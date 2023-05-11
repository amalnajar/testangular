import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutervideoComponent } from './ajoutervideo.component';

describe('AjoutervideoComponent', () => {
  let component: AjoutervideoComponent;
  let fixture: ComponentFixture<AjoutervideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutervideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutervideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
