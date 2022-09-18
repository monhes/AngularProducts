import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, Form } from '@angular/forms'; 
import { LocalPathService } from 'src/app/services/local-path.service'
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component'; 
import { Movies} from 'src/app/Models/movies';
import { catchError, from, Observable, of } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { ErrorNoticePopUpComponent } from 'src/app/error-notice-pop-up/error-notice-pop-up.component';


@Component({
  selector: 'app-movies-crud',
  templateUrl: './movies-crud.component.html',
  styleUrls: ['./movies-crud.component.css']
})
export class MoviesCRUDComponent implements OnInit {

  myArrayForm: FormGroup;
  movieForm: FormGroup;
  tempMovieForm: FormGroup;
  deleteForm: FormGroup;
  holdingDeleteForm: FormGroup;

  moviesListObs: Observable<Movies[]>;//obser
  holdtempdelete: Movies[] = []
  deleteList: any[]
  moviesList: any = []

  resetSelected(){
    this.holdtempdelete = []
  }

  MovieApiPath: string = this.path.LocalPath + 'api/Moviesapi/'

  constructor(
    private http: HttpClient, 
    private fb: FormBuilder, 
    public dialog: MatDialog,
    public path: LocalPathService,
    public loaderService:LoaderService
    ) 
    {}

  ngOnInit(): void {
    this.loaderService.isLoading.next(true);

    this.deleteForm = this.fb.group({
      deleteMovieTitle: '',
      id: 0
    })

    this.myArrayForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })

    this.movieForm = this.fb.group({
      Title: ['', [Validators.required, Validators.minLength(3)]]
      , ReleaseDate: ['', Validators.required]
      , Price: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
      , Genre: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-zA-Z\s]*$')]]
      , Rating: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-zA-Z0-9""\s-]*$'), Validators.maxLength(1)]]
    })

    this.holdingDeleteForm = this.fb.group({
      Title: ['', [Validators.required, Validators.minLength(3)]]
      , ReleaseDate: ['', Validators.required]
      , Price: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
      , Genre: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-zA-Z\s]*$')]]
      , Rating: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-zA-Z0-9""\s-]*$'), Validators.maxLength(1)]]
    })

    this.tempMovieForm = this.movieForm
    this.getMovies();
  }//End ngOnInit

  get Title() {
    return this.movieForm.get('Title');
  }
  get ReleaseDate() {
    return this.movieForm.get('ReleaseDate');
  }
  get Price() {
    return this.movieForm.get('Price');
  }
  get Genre() {
    return this.movieForm.get('Genre');
  }
  get Rating() {
    return this.movieForm.get('Rating');
  }
  get phoneForms() {
    return this.myArrayForm.get('phones') as FormArray
  }


  addPhone() {
    const phone = this.fb.group({
      area: []
    })
    this.phoneForms.push(phone);
  }

  deletePhone(i: any) {
    this.phoneForms.removeAt(i)
  }

  message:any
  getMovies() { 

      // this.http.get<any>(this.MovieApiPath).pipe().subscribe((response)=>{this.moviesList = response;(err:HttpErrorResponse)=>{if (err instanceof Error) {
      //   // client-side error
      //   this.message = `An error occured ${err.error.message}`;
      //   console.warn("clientres err",this.message)
      // } else {
      //   this.message = `Backend returned error code ${err.status}, body was: ${err.message}`;
      //   console.warn("serverres err",this.message)
      // }}})

       this.http.get<any>(this.MovieApiPath).pipe().subscribe({
        next: (response)=>{this.moviesListObs = of(response)}
        ,error: (err:any)=>{if (err instanceof HttpErrorResponse) {
          this.dialog.open(ErrorNoticePopUpComponent,{data:{message:'Server not response,Try again later.'}});
        } else if(err instanceof Error) {
          // client-side error 
          this.dialog.open(ErrorNoticePopUpComponent,{data:{message:`An error occured ${err}`}});
        }
      }
      }) 
  }

  deleteConfirmations(deleteId: any) {
    if (confirm("Are you sure to delete ")) {
      let tempurl: string = this.MovieApiPath + deleteId
      this.http.delete(tempurl).subscribe(response => { this.getMovies(); console.warn(deleteId) })
      this.resetSelected()
    }
  }

  multipleDelete(form: any) {
    //console.warn("from checkbox", this.holdtempdelete)
    if(this.holdtempdelete.length == 0)
    {confirm("No Selected Movies")}
    let tempurl: string = this.MovieApiPath + "DeleteMovies"
    if(this.holdtempdelete.length != 0){
      if (confirm("Are you sure to delete selected Movies")) {
        this.http.post(tempurl, this.holdtempdelete).subscribe(response => { return this.getMovies(); })
        this.resetSelected()
      }
    }
  }

  checkValue(event: any) {
    let checkduplicate: boolean = false
    //new model version
    if ((event.target).checked) {
      if (this.holdtempdelete.length === 0) {
        this.holdtempdelete.push({ id: (event.target).value, title: undefined, releaseDate: undefined, price: undefined, genre:undefined, rating: undefined })
      }
      else {
        for (let item of this.holdtempdelete) {
          if (item.id === (event.target).value) {
            checkduplicate = true
          }
        }
        if (checkduplicate === false) {
          this.holdtempdelete.push({ id: (event.target).value,title: undefined, releaseDate: undefined, price: undefined, genre: undefined, rating: undefined })
        }
      }
    }
    else if ((event.target).checked === false) {
      this.holdtempdelete = this.holdtempdelete.filter((data) => { return data.id != (event.target).value })
    } 

    ///////////////////////////////////////////////////////////////////////////////////////////////



    // if((event.target).checked){ 
    //   if(this.tempdelete.length === 0){
    //     this.tempdelete.push({isChecked:(event.target).checked,id:(event.target).value,title:""})
    //   }
    //   else{
    //     for(let item of this.tempdelete){
    //       if(item.id === (event.target).value)
    //       {
    //         checkduplicate = true
    //       }
    //     }
    //     if(checkduplicate === false)
    //     {
    //       this.tempdelete.push({isChecked:(event.target).checked,id:(event.target).value,title:""})
    //     }
    //   }
    // }
    // else if((event.target).checked === false){ 
    //   this.tempdelete = this.tempdelete.filter((data) => { return data.id != (event.target).value})
    // }
    // console.log(this.tempdelete) 
  }

  postMovies(form: any) {
    console.log(form)
    let tempurl: string = this.MovieApiPath + "PostMovie"
    this.http.post(tempurl, form).subscribe((data) => { this.getMovies(); })
    this.movieForm.reset();
    this.resetSelected()
  }

  updateMovies() {

  }

  openDialog(id: number) {
    let tempurl: string = this.MovieApiPath + id
    const dialogRef = this.dialog.open(MovieDetailComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        result.id = id
        this.http.put(tempurl, result).subscribe((data) => { this.getMovies() })
      }
    });
    this.resetSelected()
  }

}
