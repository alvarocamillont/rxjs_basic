import { from } from 'rxjs';

const observer = {
  next: (val) => console.log('next', val),
  error: (err) => console.log('error', err),
  complete: () => console.log('Complete')
};

const array$ = from([1, 2, 3, 4, 5]);
const promise$ = from(fetch('https://api.github.com/users/octocat'));

array$.subscribe(observer);
promise$.subscribe(observer);
