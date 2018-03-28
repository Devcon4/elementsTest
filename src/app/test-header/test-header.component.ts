import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';


@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.css']
})
export class TestHeaderComponent implements OnInit {

  constructor(injector: Injector) {
    const NgElementConstructor = createCustomElement(TestHeaderComponent, {injector});
    customElements.define('hello-world', NgElementConstructor);
  }
  ngOnInit() {
  }

}
