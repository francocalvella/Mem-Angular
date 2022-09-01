import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Article } from '../Interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesRef = collection(this.firestore, "articles")

  constructor(private firestore: Firestore) { 

  }

  addArticle(article: Article){
    return addDoc(this.articlesRef, article)
  }

  getArticles(): Observable<Article[]>{
    return collectionData(this.articlesRef, {idField: 'id'}) as Observable<Article[]>
  }

  deleteArticles(article: Article){
    const articleDocRef = doc(this.firestore, 'articles/'+article.id)
    return deleteDoc(articleDocRef)
  }

  async getArticleById(id: String): Promise<Article>{
    const articleDocRef = doc(this.firestore, 'articles/'+id)
    const docSnap = (await getDoc(articleDocRef)).data()
    return docSnap as Article
  }
}
