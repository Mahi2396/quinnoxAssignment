import { Component, Input, OnInit } from "@angular/core";
import { RepoItem } from "../dashboard.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() repolist: RepoItem;
  constructor() {}

  ngOnInit(): void {}
}
