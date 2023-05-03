/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NumbersOnlyDirective } from './numbers-only.directive';

describe('Directive: NumbersOnly', () => {
  var teste: any;
  it('should create an instance', () => {

    const directive = new NumbersOnlyDirective(teste);
    expect(directive).toBeTruthy();
  });
});
