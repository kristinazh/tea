import { Component, OnDestroy} from '@angular/core';
import {NgbModal, NgbAccordionConfig} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {NgbPanelChangeEvent} from "@ng-bootstrap/ng-bootstrap";
import {QuestionsService} from "../../../shared/servicts/questions.service";
import {QuestionType} from "../../../../type/question.type";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})





export class AboutComponent implements  OnDestroy {


  private timerPopup = setTimeout(() => {
    const modalRef = this.modalService.open(PopupComponent, {centered: true});
    modalRef.componentInstance.data = 'Посмотрите наши чайные коллекции';
  }, 9000);

  public questions: QuestionType[] = this.questionService.allQuestions;




  constructor(private modalService: NgbModal,
              private questionService: QuestionsService,
              private _config: NgbAccordionConfig) {

    _config.closeOthers = true;
  }

  nomodificar($event: NgbPanelChangeEvent){
    if ($event.panelId === 'panel1' && $event.nextState === false){
      $event.preventDefault();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.timerPopup);
    this.modalService.dismissAll();
  }

}
