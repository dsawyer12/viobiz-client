import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import gql from 'graphql-tag';
import { User, Query } from './models/user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: Observable<User>;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {

    const userQuery = gql`
      query user($email: String!) {
        user(email: $email) {
          _id
          f_name
          l_name
          email
          password
          createdAt
          updatedAt
        }
      }
    `;

    this.apollo.watchQuery<Query>({
      query: userQuery,
      variables: { email: 'user@test.com' }
    }).valueChanges.subscribe(
      res => {
        console.log(res.data.user._id);
      });

    this.user = this.apollo.watchQuery<Query>({
      query: userQuery,
      variables: { email: 'user@test.com' }
    })
    .valueChanges
    .pipe(
      map(result => result.data.user)
    );
  }
}
