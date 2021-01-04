import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeadSuccessComponent } from './addLeadSuccess.component';

describe('AddLeadSuccessComponent', () => {
  let component: AddLeadSuccessComponent;
  let fixture: ComponentFixture<AddLeadSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddLeadSuccessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeadSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not be visible by default', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    // Assert
    expect(div.getAttribute('hidden')).not.toBeNull();
  });

  it('should be visible when app is loading', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    // Act
    fixture.componentInstance.isLoading = true;
    fixture.detectChanges();

    // Assert
    expect(div.getAttribute('hidden')).toBeNull();
  });

  it('should not display a message by default', () => {
    // Arrange
    const element = fixture.nativeElement;
    const span = element.querySelectorAll('span')[0];

    // Assert
    expect(span.innerText).toBe('');
  });

  it('should display specified message', () => {
    // Arrange
    const element = fixture.nativeElement;
    const span = element.querySelectorAll('span')[0];

    // Act
    fixture.componentInstance.message = 'testing';
    fixture.detectChanges();

    // Assert
    expect(span.innerText).toBe('testing');
  });
});
