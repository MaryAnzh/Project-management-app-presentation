import { Component, Input, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
//работает, если раскоментировать подключение в reavek.d.ts
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import { IMatrixRow } from '../model/matrix-row.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})

export class SlideComponent implements OnInit {

  @Input() public matrixArray: IMatrixRow[] = [
    {
      process: 'Установка и основкые настройки ангуляр, разработка архитекутры приложения',
      mari: 'RA',
      dima: 'С',
      margo: 'С'
    },
    {
      process: 'Деплой backend',
      mari: '',
      dima: 'RA',
      margo: ''
    },
    {
      process: 'Настройка роутинга',
      mari: 'RA',
      dima: '',
      margo: ''
    },
    {
      process: 'Настройка Guard',
      mari: 'CI',
      dima: '',
      margo: 'RA'
    },
    {
      process: 'Настройка interceptors и основных запросов',
      mari: 'C',
      dima: 'RA',
      margo: 'C'
    },
    {
      process: 'Настройка авторизации пользователя',
      mari: 'RAC',
      dima: 'RC',
      margo: ''
    },
    {
      process: 'Подулючение лингво библиотеки, перевод сайта',
      mari: '',
      dima: 'RA',
      margo: ''
    },
    {
      process: 'Верстка Header',
      mari: 'RA',
      dima: '',
      margo: ''
    },
    {
      process: 'Верстка Footer',
      mari: 'CI',
      dima: '',
      margo: 'RA'
    },
    {
      process: 'Верстка Welcom',
      mari: 'RAC',
      dima: '',
      margo: 'RC'
    },
    {
      process: 'Верстка и настройка валидации Login/Logout',
      mari: 'RAC',
      dima: 'RC',
      margo: ''
    },
  ]

  @Input() public matrixArray2: IMatrixRow[] = [
    {
      process: 'Реализация sticky header',
      mari: "RA",
      dima: '',
      margo: '',
    },
    {
      process: 'Реализация бургер меню',
      mari: '',
      dima: '',
      margo: 'RA',
    },
    {
      process: 'Верстка страницы Main и ее компонентов (карточеи Board, комонент Плиск)',
      mari: 'RC',
      dima: 'R',
      margo: 'RAC'
    },
    {
      process: 'Верстка и настройка валидации Edit profile',
      mari: '',
      dima: 'RA',
      margo: ''
    },
    {
      process: 'Верстка страницы Board и ее компонентов (Column, Task), наcтройка валидации форм и логики страницы',
      mari: 'RA',
      dima: '',
      margo: ''
    },
    {
      process: 'Создание confirmation modal',
      mari: 'RA',
      dima: '',
      margo: ''
    },
    {
      process: 'Реадизация перенаправления пользователя на страницы при истекшем, и неистекшем токине',
      mari: 'RA',
      dima: '',
      margo: ''
    },
    {
      process: 'Реализация отображения ошибок со стороны BE пользователю',
      mari: 'RA',
      dima: '',
      margo: ''
    },
    {
      process: 'Реализация смены карточек drag-n-drop',
      mari: 'RA',
      dima: '',
      margo: ''
    },
    {
      process: 'Деплой приложения',
      mari: 'RA',
      dima: '',
      margo: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
    Reveal.initialize({
      navigationMode: 'grid',
      //при подключении работает, но код надо писапть начиная с {{, при этом
      //они видны при визуализации кода, что выглядит не очень красиво
      //Пример <pre><code>{{ код </code></pre>
      // т.е какой то касяу с разметкой
      //plugins: [Highlight],
    });
  }

  ngAfterViewInit() {

  }

}
