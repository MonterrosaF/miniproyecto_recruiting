import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocomprasComponent } from './listadocompras.component';

describe('ListadocomprasComponent', () => {
  let component: ListadocomprasComponent;
  let fixture: ComponentFixture<ListadocomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
