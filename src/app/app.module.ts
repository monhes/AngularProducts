import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TestRequestModule } from './test-request/test-request.module';
import { TestRequestGetComponent } from './test-request/test-request-get/test-request-get.component';
import { TopSecondBarComponent } from './top-second-bar/top-second-bar.component';
import { BookListComponent } from './projects/book-list/book-list.component';
import { ProjectsMainComponent } from './projects/projects-main/projects-main.component';
import { ChatPageComponent } from './projects/chat-page/chat-page.component';
import { CachingInterceptor } from './interceptors/caching.interceptor';
import { MoviesCRUDComponent } from './projects/movies-crud/movies-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailComponent } from './projects/movie-detail/movie-detail.component';
import { ErrorNoticePopUpComponent } from './error-notice-pop-up/error-notice-pop-up.component';

//Intorcepter
import { LoadingInterceptor } from './interceptors/loading.interceptor';

//angularMaterial
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




 

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    CartComponent,
    ShippingComponent,
    TopSecondBarComponent,
    BookListComponent,
    ProjectsMainComponent,
    ChatPageComponent,
    MoviesCRUDComponent,
    MovieDetailComponent,
    ErrorNoticePopUpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TestRequestModule,
    AppRoutingModule,
    RouterModule.forRoot([
       
      {path: 'products', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent },
      {path: 'cart', component: CartComponent },
      {path: 'shipping', component: ShippingComponent },
      {path: 'testrequestget', component: TestRequestGetComponent},
      {path:'',component:ProjectsMainComponent},
      {path:'projects/booklist',component:BookListComponent},
      {path:'projects/chatpage',component:ChatPageComponent},
      {path: 'projects/moviesCRUD', component:MoviesCRUDComponent},
      {path: 'moviedetail/:movieId', component: MovieDetailComponent}
    ]),
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi:true},
    {provide: HTTP_INTERCEPTORS,
    useClass: CachingInterceptor,
    multi:true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
