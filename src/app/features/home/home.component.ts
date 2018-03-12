import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public phoneList$: Observable<any>;

  private URL: string = 'telephones';
  private subscriptions: Subscription[] = [];

  constructor(private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.getPhoneList();
  }

  public ngOnDestroy(): void {
    if (this.subscriptions.length) {
      this.subscriptions.forEach((elem: Subscription): void => {
        elem.unsubscribe();
      });
    }
  }

  public addPhoneNumber(elem): void {
    this.subscriptions.push(this.http.post(this.URL, elem).subscribe(
      () => this.getPhoneList()));
  }

  private getPhoneList(): void {
    this.phoneList$ = this.http.get(this.URL);
  }
}
