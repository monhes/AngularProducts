import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { FormControl ,FormGroup ,FormBuilder ,FormArray, Validators} from '@angular/forms';
import * as signalR from '@microsoft/signalr';
import { from, Observable } from 'rxjs';
import { Movies } from 'src/app/Models/movies';
import { DotnetPath } from 'src/app/services/local-path.service'
import { LocalPathService } from 'src/app/services/local-path.service'

@Component({
  selector: 'app-movies-crud',
  templateUrl: './movies-crud.component.html',
  styleUrls: ['./movies-crud.component.css']
})
export class MoviesCRUDComponent implements OnInit {

  myForm:FormGroup;
  myArrayForm:FormGroup;
  movieForm:FormGroup; 
  moviesList: any = []
  
  MovieApiPath:string = DotnetPath+'api/Moviesapi'

  constructor(private http: HttpClient, private fb:FormBuilder) { 
   }

  ngOnInit(): void { 
    
    this.myArrayForm = this.fb.group({
      email:'',
      phones:this.fb.array([])
    })

    this.movieForm = this.fb.group({
      Title: ['',[Validators.required,Validators.minLength(3)]]
      ,ReleaseDate:['',Validators.required]
      ,Price:['',[Validators.required,Validators.min(1),Validators.max(100)]]
      ,Genre:['',[Validators.required,Validators.pattern('^[A-Z]+[a-zA-Z\s]*$')]]
      ,Rating:['',[Validators.required,Validators.pattern('^[A-Z]+[a-zA-Z0-9""\s-]*$') ,Validators.maxLength(1)]]
    })
    this.getMovies();
  }//End ngOnInit
  
  get Title(){
    return this.movieForm.get('Title');
  }
  get ReleaseDate(){
    return this.movieForm.get('ReleaseDate');
  }
  get Price(){
    return this.movieForm.get('Price');
  }
  get Genre(){
    return this.movieForm.get('Genre');
  }
  get Rating(){
    return this.movieForm.get('Rating');
  } 
  get phoneForms(){
    return this.myArrayForm.get('phones') as FormArray
  }

  addPhone() {
    const phone = this.fb.group({
      area:[]
    })
    this.phoneForms.push(phone);
  }

  deletePhone(i:any){ 
    this.phoneForms.removeAt(i)
  }

  getMovies(){
    this.http.get<any>(this.MovieApiPath)
    .subscribe(response => {this.moviesList = response;})
  }

   deleteConfirmations(deleteId:any){
    if(confirm("Are you sure to delete ")) {
      let tempurl: string = this.MovieApiPath+deleteId 
      this.http.delete(tempurl).subscribe(response => {this.getMovies();})   
    }
  }

  postMovies(form:any){
    console.log(form)
    let tempurl: string = this.MovieApiPath
    this.http.post(tempurl,form).subscribe((data)=>{this.getMovies();})
    this.movieForm.reset();
  }

  updateMovies(){
    
  } 
    
}
