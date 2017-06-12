import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig',
  templateUrl: './data-bindig.component.html',
  styleUrls: ['./data-bindig.component.css']
})
export class DataBindigComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/sports';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }


}
