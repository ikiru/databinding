import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = "No User was created";
  userName = "Jeff Winkler";

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateUser() {
    this.userCreationStatus = "User was created!";
  }

  onUpdateUser() {}
}
