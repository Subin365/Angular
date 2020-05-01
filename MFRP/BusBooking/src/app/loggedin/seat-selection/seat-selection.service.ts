import { Injectable } from '@angular/core';
import { LoggedinService } from '../loggedin.service';
import { Subject } from 'rxjs';

@Injectable()

export class SeatSelectionService{
    constructor(private loggedinService:LoggedinService){}
  regNo: string;
  date: string;
  seatNumber: number[] = [];
  onCalculateFare = new Subject();
    
}