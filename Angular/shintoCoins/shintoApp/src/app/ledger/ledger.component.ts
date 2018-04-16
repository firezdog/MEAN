import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger;
  keys;
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    this.ledger = this._shinto.shareLedger();
    this.keys = Object.keys(this.ledger);
  }

}
