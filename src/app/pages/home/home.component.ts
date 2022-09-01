import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Interfaces/article';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles!: Article[]

  constructor(
    private articlesService: ArticlesService
  ) { }

  async onDelete(article: Article){
    await this.articlesService.deleteArticles(article)
  }

  ngOnInit(): void {
    this.articlesService.getArticles()
    .subscribe({
      next: (res: Article[])=>this.articles = res,
      error: e=>console.log(e)
    })
  }

}
