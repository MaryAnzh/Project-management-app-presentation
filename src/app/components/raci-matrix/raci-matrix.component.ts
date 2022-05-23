import { Component, Input } from '@angular/core';
import { IMatrixRow } from 'src/app/model/matrix-row.model';

@Component({
  selector: 'app-raci-matrix',
  templateUrl: './raci-matrix.component.html',
  styleUrls: ['./raci-matrix.component.scss']
})

export class RACIMatrixComponent {

  @Input() public matrixArray: IMatrixRow[] | null = null;
}
