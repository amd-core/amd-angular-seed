# Styles

## Global Styles

Angular's use of view encapsulation allows for styles to be added to components without those styles spilling over into other components. However, in some cases it is desirable to have global styles applied throughout your application. This can be acheived by setting the view encapsulation for the root component to none and using this component to import your global styles.

``` typescript
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

```
