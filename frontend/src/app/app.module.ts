import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppComponent } from './app.component';

export function MsalInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '657e4d51-b680-40b6-a8b8-238d20dc18f2',
      authority: 'https://login.microsoftonline.com/0cc46ae4-f9bb-457f-89ce-bfdf49724174',
      redirectUri: '/',
    }
  });
}

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        MsalModule], providers: [
        {
            provide: MSAL_INSTANCE,
            useFactory: MsalInstanceFactory
        },
        MsalService,
        {
            provide: APP_INITIALIZER,
            useFactory: (msalService: MsalService) => () => msalService.initialize(),
            deps: [MsalService],
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {}
