import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    template: '<button (click)="login()">Login</button><pre>{{ data | json }}</pre>',
    standalone: false
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private msalService: MsalService, private http: HttpClient) {}

  ngOnInit() {}

login() {
  this.msalService.acquireTokenPopup({
    scopes: ['api://test-westinghouse-api/access_as_user']
  }).subscribe({
    next: (result) => {
      this.http.get('http://localhost:3000/api/protected', {
        headers: {
          Authorization: `Bearer ${result.accessToken}`
        }
      }).subscribe((res) => {
        this.data = res;
      });
    },
    error: (err) => {
      console.error('Token acquisition failed:', err);
    }
  });
}
}
