import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
  articleForm:FormGroup
  constructor(
    private fb: FormBuilder,
    private articlesService: ArticlesService,
    private router: Router
  ) { 
    this.articleForm = this.fb.group({
      title:["", [Validators.required]],
      subtitle:["", [Validators.required]],
      corpus:["", [Validators.required]],
      author:["", [Validators.required]], 
      date: new Date().toLocaleDateString() 
    })
  }

  async onSubmit(){
    await this.articlesService.addArticle(this.articleForm.value)
    this.router.navigate(["/"])
  }

  ngOnInit(): void {
  }

}
