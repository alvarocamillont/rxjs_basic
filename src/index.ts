import { interval, timer } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('Complete'),
};

const interval$ = interval(1000);
const timer$ = timer(0, 1000);

timer$.subscribe(observer);
interval$.subscribe(observer);
