import { interval, fromEvent } from "rxjs";
import { scan, mapTo, filter, takeWhile, takeUntil } from "rxjs/operators";

const countdown = document.getElementById("countdown");
const message = document.getElementById("message");
const button = document.getElementById("abort");

// streams
const counter$ = interval(1000);
const abort$ = fromEvent(button, "click");

counter$
  .pipe(
    mapTo(-1),
    scan((accumulator, current) => {
      return accumulator + current;
    }, 10),
    takeWhile((value) => value >= 0),
    takeUntil(abort$)
  )
  .subscribe((value: any) => {
    countdown.innerHTML = value;
    if (!value) {
      message.innerHTML = "Liftoff!";
    }
  });
