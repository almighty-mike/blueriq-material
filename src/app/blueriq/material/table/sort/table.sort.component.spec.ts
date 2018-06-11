import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlueriqComponents } from '@blueriq/angular';
import { BlueriqSessionTemplate, BlueriqTestingModule } from '@blueriq/angular/testing';
import { BlueriqTestSession } from '@blueriq/angular/testing/src/test_session';
import { ButtonTemplate } from '@blueriq/core/testing';
import { ButtonComponent } from '../../button/button.component';
import { MaterialModule } from '../../material/material.module';
import { TableSortComponent } from './table.sort.component';

describe('TableSortComponent', () => {
  let button: ButtonTemplate;
  let session: BlueriqTestSession;
  let component: ComponentFixture<TableSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSortComponent, ButtonComponent],
      providers: [
        BlueriqComponents.register([TableSortComponent, ButtonComponent])
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule, // or NoopAnimationsModule
        BlueriqTestingModule,
        FormsModule
      ]
    });
  });

  beforeEach(() => {
    button = ButtonTemplate.create().styles('sort');
    session = BlueriqSessionTemplate.create().build(button);
    component = session.get(TableSortComponent);
    component.autoDetectChanges();
  });

  it('should have been created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right material icon', () => {
    let iconElement = component.debugElement.query(By.css('.material-icons')).nativeElement;
    expect(iconElement).not.toContain('arrow_upward');
    expect(iconElement).not.toContain('arrow_downward');

    session.update(
      button.styles('icon', 'descending')
    );
    iconElement = component.nativeElement.querySelector('.material-icons').innerHTML;
    expect(iconElement).toContain('arrow_upward');

    session.update(
      button.styles('icon', 'ascending')
    );
    component.detectChanges();
    iconElement = component.nativeElement.querySelector('.material-icons').innerHTML;
    expect(iconElement).toContain('arrow_downward');
  });

});
