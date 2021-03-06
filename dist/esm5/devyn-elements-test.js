import { Component, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n",
                styles: [""]
            },] },
];
AppComponent.ctorParameters = function () { return []; };
var TestHeaderComponent = /** @class */ (function () {
    function TestHeaderComponent(injector) {
        var NgElementConstructor = createCustomElement(TestHeaderComponent, { injector: injector });
        customElements.define('test-header', NgElementConstructor);
    }
    TestHeaderComponent.prototype.ngOnInit = function () {
    };
    return TestHeaderComponent;
}());
TestHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-test-header',
                template: "<h1>\n  Test Header!\n</h1>",
                styles: ["h1{color:#ce6339}"]
            },] },
];
TestHeaderComponent.ctorParameters = function () { return [
    { type: Injector, },
]; };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
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
AppModule.ctorParameters = function () { return []; };

export { AppModule, AppComponent as ɵa, TestHeaderComponent as ɵb };
//# sourceMappingURL=devyn-elements-test.js.map
