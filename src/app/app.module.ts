import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { ToastrModule, ToastContainerModule  } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    "bgsColor": "#ebf2f3",
    "bgsOpacity": 0.1,
    "bgsPosition": "bottom-right",
    "bgsSize": 20,
    "bgsType": "rectangle-bounce",
    "blur": 1,
    "fgsColor": "rgba(175,234,241,0.5)",
    "fgsPosition": "center-center",
    "fgsSize": 40,
    "fgsType": "rectangle-bounce",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "#2e7cf7",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
        ToastContainerModule,
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
