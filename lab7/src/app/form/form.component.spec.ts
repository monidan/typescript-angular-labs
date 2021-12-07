import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name error should be hidden on filled input', () => {
    component.signUpForm.controls.name.setValue('daniel');
    fixture.detectChanges();

    const nameBlock = fixture.nativeElement.querySelector('label[for="name"]');
    expect(nameBlock.querySelector('p')).toBeNull();
  })

  it('phone error should be hidden on filled input', () => {
    component.signUpForm.controls.phone.setValue('380675140394');
    fixture.detectChanges();

    const nameBlock = fixture.nativeElement.querySelector('label[for="phone"]');
    expect(nameBlock.querySelector('p')).toBeNull();
  })

  it('email error should be hidden on correctly filled input', () => {
    component.signUpForm.controls.email.setValue('horokhov@gmail.com');
    fixture.detectChanges();

    const nameBlock = fixture.nativeElement.querySelector('label[for="email"]');
    expect(nameBlock.querySelector('p')).toBeNull();
  })

  it('email error is shown on wrong email', () => {
    component.signUpForm.controls.email.setValue('horokhov  gmail');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('label[for="email"]').querySelector('p').textContent).toBe('Ошибка, введите правильную почту!')
  })

  it('money sum error should be hidden on filled input', () => {
    component.signUpForm.controls.money.setValue('123');
    fixture.detectChanges();

    const nameBlock = fixture.nativeElement.querySelector('label[for="money"]');
    expect(nameBlock.querySelector('p')).toBeNull();
  })

  it('message error should be hidden on filled input', () => {
    component.signUpForm.controls.message.setValue('some message');
    fixture.detectChanges();

    const nameBlock = fixture.nativeElement.querySelector('label[for="message"]');
    expect(nameBlock.querySelector('p')).toBeNull();
  })

  it('when form is invalid error should appear', () => {
    const submitButton = fixture.nativeElement.querySelector('input[type="submit"]');
    const click = new MouseEvent('click');

    submitButton.dispatchEvent(click);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.form-error')).toBeTruthy();
  })

  it('successfull form sending causing text to appear beneath', () => {
    const submitButton = fixture.nativeElement.querySelector('input[type="submit"]');
    const click = new MouseEvent('click');

    component.signUpForm.controls.name.setValue('Daniel');
    component.signUpForm.controls.phone.setValue('38067590196');
    component.signUpForm.controls.email.setValue('horokhov@gmail.com');
    component.signUpForm.controls.money.setValue('12.95');
    component.signUpForm.controls.message.setValue('Hello, Dear!');

    submitButton.dispatchEvent(click);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.form-success')).toBeTruthy();
  })
});
