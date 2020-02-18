import { Observable } from 'rxjs';

const observer = {
  next: (value) => console.log('next', value)
};

const observable = new Observable((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
  subscriber.next('Teste');
});

observable.subscribe((value) => console.log('next', value));
