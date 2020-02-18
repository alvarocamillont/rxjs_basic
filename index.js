import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next', value)
};

const observable = new Observable((subscriber) => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count);
    subscriber.complete();
    count += 1;
  }, 1000);

  return () => {
    console.log('chamada limpeza'), clearInterval(id);
  };
});

console.log('Antes');
observable.subscribe((value) => console.log('next', value));
console.log('Depois');
