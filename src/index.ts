import { fromEvent, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { exhaustMap, finalize, pluck, switchMapTo, takeUntil, tap } from 'rxjs/operators';

// Elementos
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pollingStatus = document.getElementById('polling-status');
const dogImage: any = document.getElementById('dog');

// streams
const startClick$ = fromEvent(startButton, 'click');
const stopClick$ = fromEvent(stopButton, 'click');

startClick$
  .pipe(
    exhaustMap(() =>
      timer(0, 5000).pipe(
        tap(() => (pollingStatus.innerHTML = 'Ativo')),
        switchMapTo(
          ajax.getJSON('https://random.dog/woof.json').pipe(pluck('url'))
        ),
        takeUntil(stopClick$),
        finalize(() => (pollingStatus.innerHTML = 'Parado'))
      )
    )
  )
  .subscribe((url) => (dogImage.src = url));
