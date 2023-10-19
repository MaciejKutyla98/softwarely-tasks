import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IpActivityDates {
  latestDate: string
}

@Injectable()
export class CustomerInfoService {

  getCustomerIpById(id: number): Observable<string> {
    return of('192.158.1.38')
  }

  getIpActivityDates(numberIp: string): Observable<IpActivityDates> {
    return of({} as IpActivityDates)
  }
}
