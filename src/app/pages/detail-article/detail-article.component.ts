import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/Interfaces/article';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  article!:Article
  isLoading:boolean=true
  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService
    ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id){
      this.articlesService.getArticleById(id)
      .then((data: Article)=>{
        this.article=data
        this.isLoading=false
      })
    }
  }
  ngOnInit(): void {
  }

}
