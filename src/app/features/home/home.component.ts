import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Phone } from './phone.model';

@Component({
  selector: 'tl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public phoneList$: Observable<Phone[]>;

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

  public addPhoneNumber(phoneItem: Phone): void {
    this.subscriptions.push(this.http.post<Phone>(this.URL, phoneItem)
      .subscribe(
        () => this.getPhoneList()
      )
    );
  }

  private getPhoneList(): void {
    this.phoneList$ = this.http.get<Phone[]>(this.URL);
  }
}
