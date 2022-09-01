import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  title = "Lista de Tarefas";

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  constructor() {
    this.changeTitle("My First Angular App");
  }

  ngOnInit() {
    this.title = "Volta pra casa";
  }
}
