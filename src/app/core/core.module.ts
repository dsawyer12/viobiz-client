import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLModule } from './graphql/graphql.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphQLModule,
    AuthModule
  ]
})
export class CoreModule { }
