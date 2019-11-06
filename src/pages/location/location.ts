import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-location",
  templateUrl: "location.html"
})
export class LocationPage {
  title: string = "My location ";
  lat: number = 35.8033717;
  lng: number = 10.603829;
  zoom: number = 12;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
