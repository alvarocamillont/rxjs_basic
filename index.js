import { fromEvent } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('Complete')
};

const source$ = fromEvent(document, 'click');

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
  console.log('unsub');
  subOne.unsubscribe();
}, 10000);
