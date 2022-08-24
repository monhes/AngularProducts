import { Component, Input, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/Models/movies';
import { FormControl ,FormGroup ,FormBuilder ,FormArray, Validators} from '@angular/forms';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  @Input() movie:Movies[] = []
  myForm:FormGroup;
  myArrayForm:FormGroup;
  movieForm:FormGroup; 
  moviesList: any = []

  constructor(private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('movieId'));
    // Find the product that correspond with the id provided in route.
    //this.movie = products.find(product => product.id === productIdFromRoute);

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
  }

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

  
}

 
