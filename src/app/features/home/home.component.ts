import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public phoneList$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  public ngOnInit() {
    this.phoneList$ = this.http.get('telephones');
  }
}
