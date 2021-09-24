import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = 'Nom de l appareil';
  @Input() appareilStatus: string = 'Statut de l appareil';
  @Input() index = -1;
  @Input() id = -1;

  constructor(private appareilService: AppareilService) {

   }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }
  
  getColor(){
    if(this.appareilStatus === 'éteint'){
      return 'red';
    }
    return 'green';
    
  }

  onSwitch(){
    if(this.appareilStatus === 'allumé'){
      this.appareilService.switchOffOne(this.index);
    }
    else if(this.appareilStatus === 'éteint'){
      this.appareilService.switchOnOne(this.index);
    }
  }
}
