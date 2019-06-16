import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-project';

  postItems = [
    {
      postTitle : 'Post 1',
      postContent : 'Lorem ipsum   ...',
      postDate : new Date('2019/01/17')
    },
    {
      postTitle : 'Post 2',
      postContent : 'text blablabla 222222222',
      postDate : new Date('2019/01/10')
    },
    {
      postTitle : 'Post 3',
      postContent : 'text blablabla 333333333',
      postDate : new Date('2019/01/25')
    }
  ];
}



