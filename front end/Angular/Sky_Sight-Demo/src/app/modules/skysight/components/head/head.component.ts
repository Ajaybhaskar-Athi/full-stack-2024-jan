// import { Component } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { SkysightData } from 'src/app/models/interfaces/skysight.interface';

// import { FooterComponent } from 'src/app/footer/footer.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

}
