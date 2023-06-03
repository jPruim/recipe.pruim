import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableOfContentsPage } from './table-of-contents.page';

describe('TableOfContentsPage', () => {
  let component: TableOfContentsPage;
  let fixture: ComponentFixture<TableOfContentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableOfContentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
