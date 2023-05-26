import { AfterContentInit, Component, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  remember: boolean = false;
  @ViewChild('entry', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  @ViewChild('tmpl')
  tmpl!: TemplateRef<any>;

  constructor() {}

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    this.entry.createEmbeddedView(this.tmpl,{
      $implicit:"Umang gohol",
      location:"Rajkot"
    });
  }

  loginUser(event: any) {
    console.log(event, this.remember);
  }
}