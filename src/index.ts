import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

function calculaPercentual(element: HTMLElement) {
  const { scrollTop, scrollHeight, clientHeight } = element;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const progressBar: HTMLElement = document.querySelector('.progress-bar');

// criando a stream para monitorar o evento
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  map(({ target }: any) => calculaPercentual(target.scrollingElement))
);

progress$.subscribe((percent) => {
  progressBar.style.width = `${percent}%`;
});
