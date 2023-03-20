import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Temas } from 'src/app/temas';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-joking-hazard',
  templateUrl: './joking-hazard.component.html',
  styleUrls: ['./joking-hazard.component.css']
})
export class JokingHazardComponent implements OnInit {


card1: string = "../../../../assets/CARDS/joking hazard-card-verso.png";
card2: string = "../../../../assets/CARDS/joking hazard-card-verso.png";
card3: string = "../../../../assets/CARDS/joking hazard-card-verso.png";

numCard: number = NaN;


@ViewChild('cardVerso1')
cardVerso1!: ElementRef;
@ViewChild('cardVerso2')
cardVerso2!: ElementRef;
@ViewChild('cardVerso3')
cardVerso3!: ElementRef;

clickedCard1() {
  if (this.card1 == "../../../../assets/CARDS/joking hazard-card-verso.png") {

    this.cardVerso1.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";


    setTimeout(() => {
      this.numCard = Math.floor(Math.random() * this.cards[1].length)
      this.card1 = this.cards[1][this.numCard]
      this.cardVerso1.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";
      this.cardVerso1.nativeElement.style.background = "#fff";

    }, 500);

  } else {
    this.cardVerso1.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";
    this.cardVerso1.nativeElement.style.background = "#141414";


    setTimeout(() => {
      this.card1 = "../../../../assets/CARDS/joking hazard-card-verso.png"
      this.cardVerso1.nativeElement.style.transform = "rotate3D(0,1,0, -90deg)";
      this.numCard = Math.floor(Math.random() * this.cards[1].length)
    }, 500);
    setTimeout(() => {
      this.cardVerso1.nativeElement.style.background = "#fff";
      this.card1 = this.cards[1][this.numCard]
      this.cardVerso1.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";
    }, 900);


  }
}

clickedCard2() {
  if (this.card2 == "../../../../assets/CARDS/joking hazard-card-verso.png") {

    this.cardVerso2.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";


    setTimeout(() => {
      this.numCard = Math.floor(Math.random() * this.cards[1].length)


      while (this.cards[1][this.numCard] == this.card1) {
        this.numCard = Math.floor(Math.random() * this.cards[1].length)
        this.card2 = this.cards[1][this.numCard]
        console.log(this.card2);

      }
      this.card2 = this.cards[1][this.numCard]





      this.cardVerso2.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";
      this.cardVerso2.nativeElement.style.background = "#fff";

    }, 500);

  } else {
    this.cardVerso2.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";
    this.cardVerso2.nativeElement.style.background = "#141414";


    setTimeout(() => {
      this.card2 = "../../../../assets/CARDS/joking hazard-card-verso.png"
      this.cardVerso2.nativeElement.style.transform = "rotate3D(0,1,0, -90deg)";
      this.numCard = Math.floor(Math.random() * this.cards[1].length)
    }, 500);
    setTimeout(() => {
      this.cardVerso2.nativeElement.style.background = "#fff";
      while (this.cards[1][this.numCard] == this.card1) {
        this.numCard = Math.floor(Math.random() * this.cards[1].length)
        this.card2 = this.cards[1][this.numCard]

      }
      this.card2 = this.cards[1][this.numCard]
      this.cardVerso2.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";
    }, 900);


  }
}

clickedCard3() {
  if (this.card3 == "../../../../assets/CARDS/joking hazard-card-verso.png") {

    this.cardVerso3.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";


    setTimeout(() => {
      this.cardSelecionado = Math.floor(Math.random() * this.cards.length)
      this.numCard = Math.floor(Math.random() * this.cards[this.cardSelecionado].length)
      while (this.cards[this.cardSelecionado][this.numCard] == this.card1 || this.cards[this.cardSelecionado][this.numCard] == this.card2) {
        this.cardSelecionado = Math.floor(Math.random() * this.cards.length)
        this.numCard = Math.floor(Math.random() * this.cards[this.cardSelecionado].length)
        this.card3 = this.cards[this.cardSelecionado][this.numCard]

      }
      this.card3 = this.cards[this.cardSelecionado][this.numCard]
      this.cardVerso3.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";
      this.cardVerso3.nativeElement.style.background = "#fff";

    }, 500);

  } else {
    this.cardVerso3.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";
    this.cardVerso3.nativeElement.style.background = "#141414";


    setTimeout(() => {
      this.card3 = "../../../../assets/CARDS/joking hazard-card-verso.png"
      this.cardVerso3.nativeElement.style.transform = "rotate3D(0,1,0, -90deg)";
      this.cardSelecionado = Math.floor(Math.random() * this.cards.length)
      this.numCard = Math.floor(Math.random() * this.cards[this.cardSelecionado].length)
    }, 500);
    setTimeout(() => {
      while (this.cards[this.numCard] == this.card1 || this.cards[this.numCard] == this.card2) {
        this.cardSelecionado = Math.floor(Math.random() * this.cards.length)
        this.numCard = Math.floor(Math.random() * this.cards[this.cardSelecionado].length)
        this.card3 = this.cards[this.cardSelecionado][this.numCard]

      }
      this.card3 = this.cards[this.cardSelecionado][this.numCard]
      this.cardVerso3.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";
      this.cardVerso3.nativeElement.style.background = "#fff";
    }, 900);


  }
}


  @ViewChild('inputConteiner')
  inputConteiner!: ElementRef;

  @ViewChild('buttonConfig1')
  buttonConfig1!: ElementRef;


  ngOnInit() {

  }


  photoCover: string = "../../../assets/CARDS/joking hazard-card-verso.png"
  temaRound: string = "Joking Hazard"


  constructor() { }

  nextTirinha() {
    this.cardVerso1.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";

    this.cardVerso2.nativeElement.style.transform = "rotate3D(0,1,0,90deg)";

    this.cardVerso3.nativeElement.style.transform = "rotate3D(0,1,0, 90deg)";
    setTimeout(() => {
// card 1
      this.cardVerso1.nativeElement.style.background = "#141414";
      this.card1 = "../../../../assets/CARDS/joking hazard-card-verso.png"
      this.cardVerso1.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";

// card2
      this.cardVerso2.nativeElement.style.background = "#141414";
      this.card2 = "../../../../assets/CARDS/joking hazard-card-verso.png"
      this.cardVerso2.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";
// card3
      this.cardVerso3.nativeElement.style.background = "#141414";
      this.card3 = "../../../../assets/CARDS/joking hazard-card-verso.png"
      this.cardVerso3.nativeElement.style.transform = "rotate3D(0,1,0, 0deg)";

    }, 500);
  }



  cardSelecionado: number = NaN



  /*---------------------- Cards -----------------------*/
  cards: any[] = [
    [
      "../../../../assets/CARDS/joking hazard-card13.png",
      "../../../../assets/CARDS/joking hazard-card16.png",
      "../../../../assets/CARDS/joking hazard-card31.png",
      "../../../../assets/CARDS/joking hazard-card34.png",
      "../../../../assets/CARDS/joking hazard-card49.png",
      "../../../../assets/CARDS/joking hazard-card52.png",
      "../../../../assets/CARDS/joking hazard-card67.png",
      "../../../../assets/CARDS/joking hazard-card70.png",
      "../../../../assets/CARDS/joking hazard-card85.png",
      "../../../../assets/CARDS/joking hazard-card88.png",
      "../../../../assets/CARDS/joking hazard-card103.png",
      "../../../../assets/CARDS/joking hazard-card106.png",
      "../../../../assets/CARDS/joking hazard-card121.png",
      "../../../../assets/CARDS/joking hazard-card124.png",
      "../../../../assets/CARDS/joking hazard-card139.png",
      "../../../../assets/CARDS/joking hazard-card142.png",
      "../../../../assets/CARDS/joking hazard-card150.png",
      "../../../../assets/CARDS/joking hazard-card157.png",
      "../../../../assets/CARDS/joking hazard-card160.png",
      "../../../../assets/CARDS/joking hazard-card175.png",

    ],
    [
      "../../../../assets/CARDS/joking hazard-card1.png",
      "../../../../assets/CARDS/joking hazard-card2.png",
      "../../../../assets/CARDS/joking hazard-card3.png",
      "../../../../assets/CARDS/joking hazard-card4.png",
      "../../../../assets/CARDS/joking hazard-card5.png",
      "../../../../assets/CARDS/joking hazard-card6.png",
      "../../../../assets/CARDS/joking hazard-card7.png",
      "../../../../assets/CARDS/joking hazard-card8.png",
      "../../../../assets/CARDS/joking hazard-card9.png",
      "../../../../assets/CARDS/joking hazard-card10.png",
      "../../../../assets/CARDS/joking hazard-card11.png",
      "../../../../assets/CARDS/joking hazard-card12.png",
      "../../../../assets/CARDS/joking hazard-card14.png",
      "../../../../assets/CARDS/joking hazard-card15.png",
      "../../../../assets/CARDS/joking hazard-card17.png",
      "../../../../assets/CARDS/joking hazard-card18.png",
      "../../../../assets/CARDS/joking hazard-card19.png",
      "../../../../assets/CARDS/joking hazard-card20.png",
      "../../../../assets/CARDS/joking hazard-card21.png",
      "../../../../assets/CARDS/joking hazard-card22.png",
      "../../../../assets/CARDS/joking hazard-card23.png",
      "../../../../assets/CARDS/joking hazard-card24.png",
      "../../../../assets/CARDS/joking hazard-card25.png",
      "../../../../assets/CARDS/joking hazard-card26.png",
      "../../../../assets/CARDS/joking hazard-card27.png",
      "../../../../assets/CARDS/joking hazard-card28.png",
      "../../../../assets/CARDS/joking hazard-card29.png",
      "../../../../assets/CARDS/joking hazard-card30.png",
      "../../../../assets/CARDS/joking hazard-card32.png",
      "../../../../assets/CARDS/joking hazard-card33.png",
      "../../../../assets/CARDS/joking hazard-card35.png",
      "../../../../assets/CARDS/joking hazard-card36.png",
      "../../../../assets/CARDS/joking hazard-card37.png",
      "../../../../assets/CARDS/joking hazard-card38.png",
      "../../../../assets/CARDS/joking hazard-card39.png",
      "../../../../assets/CARDS/joking hazard-card40.png",
      "../../../../assets/CARDS/joking hazard-card41.png",
      "../../../../assets/CARDS/joking hazard-card42.png",
      "../../../../assets/CARDS/joking hazard-card43.png",
      "../../../../assets/CARDS/joking hazard-card44.png",
      "../../../../assets/CARDS/joking hazard-card45.png",
      "../../../../assets/CARDS/joking hazard-card46.png",
      "../../../../assets/CARDS/joking hazard-card47.png",
      "../../../../assets/CARDS/joking hazard-card48.png",
      "../../../../assets/CARDS/joking hazard-card50.png",
      "../../../../assets/CARDS/joking hazard-card51.png",
      "../../../../assets/CARDS/joking hazard-card53.png",
      "../../../../assets/CARDS/joking hazard-card54.png",
      "../../../../assets/CARDS/joking hazard-card55.png",
      "../../../../assets/CARDS/joking hazard-card56.png",
      "../../../../assets/CARDS/joking hazard-card57.png",
      "../../../../assets/CARDS/joking hazard-card58.png",
      "../../../../assets/CARDS/joking hazard-card59.png",
      "../../../../assets/CARDS/joking hazard-card60.png",
      "../../../../assets/CARDS/joking hazard-card61.png",
      "../../../../assets/CARDS/joking hazard-card62.png",
      "../../../../assets/CARDS/joking hazard-card63.png",
      "../../../../assets/CARDS/joking hazard-card64.png",
      "../../../../assets/CARDS/joking hazard-card65.png",
      "../../../../assets/CARDS/joking hazard-card66.png",
      "../../../../assets/CARDS/joking hazard-card68.png",
      "../../../../assets/CARDS/joking hazard-card69.png",
      "../../../../assets/CARDS/joking hazard-card71.png",
      "../../../../assets/CARDS/joking hazard-card72.png",
      "../../../../assets/CARDS/joking hazard-card73.png",
      "../../../../assets/CARDS/joking hazard-card74.png",
      "../../../../assets/CARDS/joking hazard-card75.png",
      "../../../../assets/CARDS/joking hazard-card76.png",
      "../../../../assets/CARDS/joking hazard-card77.png",
      "../../../../assets/CARDS/joking hazard-card78.png",
      "../../../../assets/CARDS/joking hazard-card79.png",
      "../../../../assets/CARDS/joking hazard-card80.png",
      "../../../../assets/CARDS/joking hazard-card81.png",
      "../../../../assets/CARDS/joking hazard-card82.png",
      "../../../../assets/CARDS/joking hazard-card83.png",
      "../../../../assets/CARDS/joking hazard-card84.png",
      "../../../../assets/CARDS/joking hazard-card86.png",
      "../../../../assets/CARDS/joking hazard-card87.png",
      "../../../../assets/CARDS/joking hazard-card89.png",
      "../../../../assets/CARDS/joking hazard-card90.png",
      "../../../../assets/CARDS/joking hazard-card91.png",
      "../../../../assets/CARDS/joking hazard-card92.png",
      "../../../../assets/CARDS/joking hazard-card93.png",
      "../../../../assets/CARDS/joking hazard-card94.png",
      "../../../../assets/CARDS/joking hazard-card95.png",
      "../../../../assets/CARDS/joking hazard-card96.png",
      "../../../../assets/CARDS/joking hazard-card97.png",
      "../../../../assets/CARDS/joking hazard-card98.png",
      "../../../../assets/CARDS/joking hazard-card99.png",
      "../../../../assets/CARDS/joking hazard-card100.png",
      "../../../../assets/CARDS/joking hazard-card101.png",
      "../../../../assets/CARDS/joking hazard-card102.png",
      "../../../../assets/CARDS/joking hazard-card104.png",
      "../../../../assets/CARDS/joking hazard-card105.png",
      "../../../../assets/CARDS/joking hazard-card107.png",
      "../../../../assets/CARDS/joking hazard-card108.png",
      "../../../../assets/CARDS/joking hazard-card109.png",
      "../../../../assets/CARDS/joking hazard-card110.png",
      "../../../../assets/CARDS/joking hazard-card111.png",
      "../../../../assets/CARDS/joking hazard-card112.png",
      "../../../../assets/CARDS/joking hazard-card113.png",
      "../../../../assets/CARDS/joking hazard-card114.png",
      "../../../../assets/CARDS/joking hazard-card115.png",
      "../../../../assets/CARDS/joking hazard-card116.png",
      "../../../../assets/CARDS/joking hazard-card117.png",
      "../../../../assets/CARDS/joking hazard-card118.png",
      "../../../../assets/CARDS/joking hazard-card119.png",
      "../../../../assets/CARDS/joking hazard-card120.png",
      "../../../../assets/CARDS/joking hazard-card122.png",
      "../../../../assets/CARDS/joking hazard-card123.png",
      "../../../../assets/CARDS/joking hazard-card125.png",
      "../../../../assets/CARDS/joking hazard-card126.png",
      "../../../../assets/CARDS/joking hazard-card127.png",
      "../../../../assets/CARDS/joking hazard-card128.png",
      "../../../../assets/CARDS/joking hazard-card129.png",
      "../../../../assets/CARDS/joking hazard-card130.png",
      "../../../../assets/CARDS/joking hazard-card131.png",
      "../../../../assets/CARDS/joking hazard-card132.png",
      "../../../../assets/CARDS/joking hazard-card133.png",
      "../../../../assets/CARDS/joking hazard-card134.png",
      "../../../../assets/CARDS/joking hazard-card135.png",
      "../../../../assets/CARDS/joking hazard-card136.png",
      "../../../../assets/CARDS/joking hazard-card137.png",
      "../../../../assets/CARDS/joking hazard-card138.png",
      "../../../../assets/CARDS/joking hazard-card140.png",
      "../../../../assets/CARDS/joking hazard-card141.png",
      "../../../../assets/CARDS/joking hazard-card143.png",
      "../../../../assets/CARDS/joking hazard-card144.png",
      "../../../../assets/CARDS/joking hazard-card145.png",
      "../../../../assets/CARDS/joking hazard-card146.png",
      "../../../../assets/CARDS/joking hazard-card147.png",
      "../../../../assets/CARDS/joking hazard-card148.png",
      "../../../../assets/CARDS/joking hazard-card149.png",
      "../../../../assets/CARDS/joking hazard-card151.png",
      "../../../../assets/CARDS/joking hazard-card152.png",
      "../../../../assets/CARDS/joking hazard-card153.png",
      "../../../../assets/CARDS/joking hazard-card154.png",
      "../../../../assets/CARDS/joking hazard-card155.png",
      "../../../../assets/CARDS/joking hazard-card156.png",
      "../../../../assets/CARDS/joking hazard-card158.png",
      "../../../../assets/CARDS/joking hazard-card159.png",
      "../../../../assets/CARDS/joking hazard-card161.png",
      "../../../../assets/CARDS/joking hazard-card162.png",
      "../../../../assets/CARDS/joking hazard-card163.png",
      "../../../../assets/CARDS/joking hazard-card164.png",
      "../../../../assets/CARDS/joking hazard-card165.png",
      "../../../../assets/CARDS/joking hazard-card166.png",
      "../../../../assets/CARDS/joking hazard-card167.png",
      "../../../../assets/CARDS/joking hazard-card168.png",
      "../../../../assets/CARDS/joking hazard-card169.png",
      "../../../../assets/CARDS/joking hazard-card170.png",
      "../../../../assets/CARDS/joking hazard-card171.png",
      "../../../../assets/CARDS/joking hazard-card172.png",
      "../../../../assets/CARDS/joking hazard-card173.png",
      "../../../../assets/CARDS/joking hazard-card174.png",
      "../../../../assets/CARDS/joking hazard-card176.png",
      "../../../../assets/CARDS/joking hazard-card177.png",
      "../../../../assets/CARDS/joking hazard-card178.png",
      "../../../../assets/CARDS/joking hazard-card179.png",
      "../../../../assets/CARDS/joking hazard-card180.png",
    ]
  ]
}
