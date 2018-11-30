import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {DetailsModel} from './details.model';
import {AppComponentService} from './app-component.service';

@Injectable()
export class AppComponentResolver implements Resolve<DetailsModel> {

  constructor(private appComponentService: AppComponentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DetailsModel> | Promise<DetailsModel> | DetailsModel {
    return this.appComponentService.getDetails().pipe(map(eventDetails => eventDetails));
  }

}
