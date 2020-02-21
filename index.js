import { of, range } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('Complete')
};
const source$ = of(1, 2, 3, 4, 5);
const range$ = range(1, 5);

source$.subscribe(observer);
range$.subscribe(observer);
