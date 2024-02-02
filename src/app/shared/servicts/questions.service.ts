import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {QuestionType} from "../../../type/question.type";


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private readonly questions: QuestionType[] = [
    {
      id: 1,
      question: 'Собираете ли вы подарочные боксы?',
      answer: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на\n' +
        '            любой вкус, объем и стоимость!',
    },
    {
      id: 2,
      question: 'Сколько у вас разновидностей чая?',
      answer: '6 разновидностей чая, мы работаем над увеличением продукции.',
    },
    {
      id: 3,
      question: ' В какой срок осуществляется доставка?',
      answer: `Доставка осуществляется в течении 5 рабочих дней.`,
    },
    {
      id: 4,
      question: 'У вас обновляется ассортимент?',
      answer: 'Да, раз в месяц.',
    },
    {
      id: 5,
      question: 'Какого объема у вас пачки чая?',
      answer: '100гр',
    },
  ]
  private questions$ = new BehaviorSubject<QuestionType[]>(this.questions);
  constructor() { }
  get allQuestions(): QuestionType[] {
    return this.questions$.getValue();
  }
}
