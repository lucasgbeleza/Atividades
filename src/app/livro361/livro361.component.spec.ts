import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Livro361Component } from './livro361.component';

describe('Livro361Component', () => {
  let component: Livro361Component;
  let fixture: ComponentFixture<Livro361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Livro361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Livro361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
