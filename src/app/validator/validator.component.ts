import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fmf-validator',
  templateUrl: './validator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidatorComponent {
  constructor(
    private router: Router
  ) { }

  public validateActivationCode(): void {
    this.router.navigateByUrl('/tracker');
  }
}
