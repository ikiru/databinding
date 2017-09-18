// ======= Modules ===========
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AlertModule } from "ngx-bootstrap";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";

// ========== Components ===========
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
