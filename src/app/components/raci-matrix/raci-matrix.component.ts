import { Component } from '@angular/core';

type MatrixRow = {
  process: '',
  mari: '',
  dima: '',
  margo: '',
}

@Component({
  selector: 'app-raci-matrix',
  templateUrl: './raci-matrix.component.html',
  styleUrls: ['./raci-matrix.component.scss']
})

export class RACIMatrixComponent {
  public matrixArray: MatrixRow[] = [
    {
      process: '',
      mari: '',
      dima: '',
      margo: ''

    }
  ]
}
