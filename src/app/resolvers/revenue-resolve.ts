import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Revenue } from "../core/models/revenue";
import { RevenueService } from "../services/revenue.service";

@Injectable({
  providedIn: 'root'
})

export class RevenueResolve implements Resolve<Revenue> {

  constructor (
    private revenueService: RevenueService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Revenue> {

    const revenueId = route.params.id;

    if(isNaN(+revenueId)) {
      this.router.navigate(['']);
      return of(null);
    }

    return this.revenueService.getRevenuesById(revenueId)
      .pipe(
        map(result => {
          if (result) {
            return result;
          } else {
            this.router.navigate(['']);
            return null;
          }
        }),
        catchError(() => {
          this.router.navigate(['']);
          return of(null);
        })
      )
  }

}
