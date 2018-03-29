import { Component, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: `<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestHeaderComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        const /** @type {?} */ NgElementConstructor = createCustomElement(TestHeaderComponent, { injector });
        customElements.define('test-header', NgElementConstructor);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-test-header',
                template: `<h1>
  <ng-content></ng-content>
</h1>`,
                styles: [`h1{color:#161616}`]
            },] },
];
/** @nocollapse */
TestHeaderComponent.ctorParameters = () => [
    { type: Injector, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    TestHeaderComponent
                ],
                imports: [],
                exports: [
                    TestHeaderComponent
                ],
                providers: [],
                bootstrap: [AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { AppModule, AppComponent as ɵa, TestHeaderComponent as ɵb };
//# sourceMappingURL=elements-test.js.map
