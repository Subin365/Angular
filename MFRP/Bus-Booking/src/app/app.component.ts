import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bus-Booking';
  data1 = [
    'Thiruvananthapuram',
    'Kollam',
    'Alappuzha',
    'Pathanamthitta',
    'Kottayam',
    'Idukki',
    'Ernakulam',
    'Thrissur',
    'Palakkad',
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Kannur',
    'Kasaragod',
  ];
  data3 = [
    'Thiruvananthapuram',
    'Kollam',
    'Alappuzha',
    'Pathanamthitta',
    'Kottayam',
    'Idukki',
    'Ernakulam',
    'Thrissur',
    'Palakkad',
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Kannur',
    'Kasaragod',
  ];
  data2 = [
    'Thiruvananthapuram',
    'Kollam',
    'Alappuzha',
    'Pathanamthitta',
    'Kottayam',
    'Idukki',
    'Ernakulam',
    'Thrissur',
    'Palakkad',
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Kannur',
    'Kasaragod',
  ];
  keyword = 'name';

  posts: { id: string; title: string; content: string }[] = [];
  token: string;

  constructor(private http: HttpClient, private appService: AppService) {}

  ngOnInit() {
    this.getPosts();
  }

  selectEvent(item) {
    console.log(item);
  }

  getPosts() {
    this.http
      .get<{
        message: string;
        posts: any[];
      }>('http://localhost:3000/api/posts')
      .pipe(
        map((responseData) => {
          return responseData.posts.map((post) => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
            };
          });
        })
      )
      .subscribe((transfomedData) => {
        this.posts = transfomedData;
      });
  }

  onDelete(id: string) {
    this.http.delete('http://localhost:3000/api/posts/' + id).subscribe(() => {
      console.log('Deleted');
      this.getPosts();
    });
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  onSubmit(form: NgForm) {
    let postId: string;
    if (form.invalid) {
      return;
    }
    this.http
      .post<{ message: string; postId: string }>(
        'http://localhost:3000/api/posts',
        {
          id: null,
          title: form.value.title,
          content: form.value.content,
        }
      )
      .subscribe((responseData) => {
        postId = responseData.postId;
        console.log('inside' + postId);
        this.getPosts();
      });
    this.posts.push({
      id: postId,
      title: form.value.title,
      content: form.value.content,
    });
    form.resetForm();
  }

  onLogin(form: NgForm) {
    this.http
      .post<{ token: string }>('http://localhost:3000/api/posts/login ', {
        email: form.value.email,
        password: form.value.password,
      })
      .subscribe((Response) => {
        console.log(Response);
        this.token = Response.token;
        this.appService.setToken(this.token);
      });
  }

  onSignup(form: NgForm) {
    console.log('signup');
    this.http
      .post('http://localhost:3000/api/posts/signup', {
        email: form.value.email,
        password: form.value.password,
      })
      .subscribe((Response) => {
        console.log(Response);
      });
  }

  onFocused(e) {
    // do something when input is focused
  }
}
