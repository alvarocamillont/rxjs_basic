import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next', value)
};

const observable = new Observable((subscriber) => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count);
    count += 1;
  }, 1000);

  return () => {
    console.log('chamada limpeza'), clearInterval(id);
  };
});

console.log('Antes');
const subscription = observable.subscribe((value) =>
  console.log('next', value)
);

const subscriptionTwo = observable.subscribe((value) =>
  console.log('next', value)
);

subscription.add(subscriptionTwo);

setTimeout(() => {
  subscription.unsubscribe();
}, 4500);
console.log('Depois');
