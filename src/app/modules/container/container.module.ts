import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlueriqCommonModule, BlueriqComponents } from '@blueriq/angular';
import { SharedModule } from '@shared/shared.module';
import { ContainerComponent } from './container.component';

const BLUERIQ_COMPONENTS = [
  ContainerComponent
];

@NgModule({
  declarations: [
    BLUERIQ_COMPONENTS
  ],
  providers: [
    BlueriqComponents.register(BLUERIQ_COMPONENTS)
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BlueriqCommonModule,
    CommonModule

  ],
  exports: [BLUERIQ_COMPONENTS]
})
export class ContainerModule {
}
