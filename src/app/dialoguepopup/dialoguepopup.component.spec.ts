import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguepopupComponent } from './dialoguepopup.component';

describe('DialoguepopupComponent', () => {
  let component: DialoguepopupComponent;
  let fixture: ComponentFixture<DialoguepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoguepopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
