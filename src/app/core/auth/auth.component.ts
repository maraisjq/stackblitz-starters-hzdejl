import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgIf } from "@angular/common";
import { ListErrorsComponent } from "../../shared/list-errors.component";
import { Errors } from "../models/errors.model";
import { UserService } from "../services/user.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

interface AuthForm {
  email: FormControl<string>;
  password: FormControl<string>;
  username?: FormControl<string>;
}

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth.component.html",
  imports: [RouterLink, NgIf, ListErrorsComponent, ReactiveFormsModule],
  standalone: true,
})
export class AuthComponent implements OnInit {
  authType = "";
  title = "";
  errors: Errors = { errors: {} };
  isSubmitting = false;
  //authForm: FormGroup<AuthForm>;
  destroy$ = new Subject<void>();
  
  constructor(    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService) { 

  }

  ngOnInit() {
  }

}