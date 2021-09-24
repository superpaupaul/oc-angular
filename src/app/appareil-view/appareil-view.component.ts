import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils!: any[];
  appareilSubscription?: Subscription;


  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    if(confirm('Etes vous sûr de vouloir éteindre tous vos appareils?')){
      this.appareilService.switchOffAll();
    }
  }

  ngOnDestroy(){
    this.appareilSubscription?.unsubscribe();
  }
}
