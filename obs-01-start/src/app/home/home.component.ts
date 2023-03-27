import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(
    //   count=> {
    //     console.log(count);
    //   }
    // );
    const customObservable = Observable.create(observer=> {
      let count  =0;
      setInterval( ()=> {
        observer.next(count);
        if(count==5) {
          observer.complete();
        }

        // if(count > 3) {
        //   observer.error(new Error("Error in custom oberver"))
        // }
        count++;
      }, 1000)
    });

    this.firstObsSubscription =customObservable.subscribe(
      data=> {
      console.log(data);
      },
      error => {
        console.log(error.message);
      },
      () => {
        console.log("Completed");
      }

    )
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe(); 
  }

}
