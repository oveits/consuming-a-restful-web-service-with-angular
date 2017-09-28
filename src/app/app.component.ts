import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title : any = null

  constructor(private _http: Http) {}

  ngOnInit() {
     this._http.get('https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078')
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.title = data.title;
                        console.log(data);
                });
  }
}
