import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users.service';

import { UsersPageComponent } from './users-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersPageComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
