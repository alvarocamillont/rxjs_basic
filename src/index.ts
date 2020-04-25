import { interval } from 'rxjs';
import { scan, mapTo, filter } from 'rxjs/operators';

const countdown = document.getElementById('countdown');
const message = document.getElementById('message');

// streams
const counter$ = interval(1000);

counter$
  .pipe(
    mapTo(-1),
    scan((accumulator, current) => {
      return accumulator + current;
    }, 10),
    filter((value) => value >= 0)
  )
  .subscribe((value: any) => {
    countdown.innerHTML = value;
    if (!value) {
      message.innerHTML = 'Liftoff!';
    }
  });
