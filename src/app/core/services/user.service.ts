import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

//import { JwtService } from "./jwt.service";
import { map, distinctUntilChanged, tap, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })

export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());
      
  public isAuthenticated = this.currentUser.pipe(map((user) => !!user));
  constructor() { }

}