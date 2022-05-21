import { Component, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
//import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Reveal.initialize({
      navigationMode: 'grid',
    });
  }

  ngAfterViewInit(){

  }

}
