import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ATMHistory, ATMSelectors } from '@atm-app/atms/state';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'atm-app-toast-creator',
  templateUrl: './toast-creator.component.html',
  styleUrls: ['./toast-creator.component.scss']
})
export class ToastCreatorComponent implements OnInit, OnDestroy {
  @Select(ATMSelectors.history) history$!: Observable<ATMHistory[]>;

  subscription!: Subscription;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.subscription = this.history$.subscribe(history => {
      if (history && history.length > 0) {
        if (history[history.length - 1].success) {
          this.toastr.success(history[history.length - 1].message);
        } else {
          this.toastr.error(history[history.length - 1].message);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
