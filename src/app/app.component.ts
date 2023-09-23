import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'TextSearch';

  TextSearch=new FormControl()
  nbOfPosts=0



  Posts=[
    {
      ID: 1,
      Title: 'Sample Title 1',
      Info: 'This is the first paragraph of information for Post 1. It can contain any relevant details or content you want to include.',
      PostedDate:'Dec 07,2000'
    },
    {
      ID: 2,
      Title: 'Sample Title 2 Sample Title 2 Sample Title 2 Sample Title 2 Sample Title 2 Sample Title 2 Sample Title 2 Sample Title 2 Sample Title 2',
      Info: 'This is the second paragraph of information for Post 2. It can contain different content from the first post.',
      PostedDate:'Feb 05,2023'
    },
    {
      ID: 3,
      Title: 'Sample Title 3',
      Info: 'This is the third paragraph of information for Post 3. You can customize it as needed.',
      PostedDate:'Oct 09,2018'
    }
  ]

  ngOnInit(): void {
    this.TextSearch.valueChanges.subscribe(searchValue=>{

      this.nbOfPosts=0

      this.Posts=this.Posts.map(el=>{
        el.Title=el.Title.replaceAll('<mark>','').replaceAll('</mark>','')
        if(searchValue!=''&&el.Title.toLowerCase().includes(searchValue.toLowerCase())){
          el.Title=el.Title.replaceAll(new RegExp(searchValue,'ig'),(match) => `<mark>${match}</mark>`)
          var nb=el.Title.match(new RegExp('<mark>','g'))
          if(nb)this.nbOfPosts+=nb.length
        }

        el.Info=el.Info.replaceAll('<mark>','').replaceAll('</mark>','')
        if(searchValue!=''&&el.Info.toLowerCase().includes(searchValue.toLowerCase())){
          el.Info=el.Info.replaceAll(new RegExp(searchValue,'ig'),(match) => `<mark>${match}</mark>`)
          var nb=el.Info.match(new RegExp('<mark>','g'))
          if(nb)this.nbOfPosts+=nb.length
        }

        return el
      })
    })
  }
  ClearSeacr(){
    this.TextSearch.reset()
  }
}
