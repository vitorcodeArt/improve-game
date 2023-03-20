
import { Component, ViewChild, ViewChildren, ElementRef, QueryList, HostListener, AfterViewInit } from '@angular/core';

import { TemasService } from 'src/app/services/temas.service';
import { TemasPrimariosComponent } from './components/temas-primario/temas-primarios.component';
import { Temas } from 'src/app/temas';
import { gsap } from 'gsap';
import { delay } from 'rxjs';
import { Bounce } from 'gsap/all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild(TemasPrimariosComponent) comp_p_1!: TemasPrimariosComponent

  @ViewChild('comp_p_2') comp_p_2!: ElementRef;
  @ViewChild('comp_p_3') comp_p_3!: ElementRef;
  @ViewChild('comp_p_4') comp_p_4!: ElementRef;
  @ViewChild('comp_p_5') comp_p_5!: ElementRef;



  @ViewChild('btnTemasPrimarios') btnTemasPrimarios!: ElementRef;
  @ViewChild('btnTemasSecundarios') btnTemasSecundarios!: ElementRef;
  @ViewChild('setaCircle') setaCircle!: ElementRef;
  @ViewChild('setaCircle2') setaCircle2!: ElementRef;

temaPrimarioView() {
  console.log(this.btnTemasPrimarios.nativeElement.classList[3]);

  if (this.btnTemasPrimarios.nativeElement.classList[3] == 'collapsed') {
    this.btnTemasPrimarios.nativeElement.style.background = '#00000010'
    this.setaCircle.nativeElement.style.transform = 'rotate3d(0,0,1,-180deg)'
  } else {
    this.btnTemasPrimarios.nativeElement.style.background = ''
    this.setaCircle.nativeElement.style.transform = 'rotate3d(0,0,1,0deg)'
  }
}

temaSecundarioView() {
  if (this.btnTemasSecundarios.nativeElement.classList[3] != 'collapsed') {
    this.setaCircle2.nativeElement.style.transform = 'rotate3d(0,0,1,180deg)'
    this.btnTemasSecundarios.nativeElement.style.background = '#ffffff10'
  } else {
    this.btnTemasSecundarios.nativeElement.style.background = '#00000010'
    this.setaCircle2.nativeElement.style.transform = 'rotate3d(0,0,1,0deg)'
  }
}

  constructor(private temasService: TemasService, private el: ElementRef) {}

  @ViewChild('tema1') tema1!: ElementRef;
  @ViewChild('tema2') tema2!: ElementRef;
  @ViewChild('tema3') tema3!: ElementRef;
  @ViewChild('tema4') tema4!: ElementRef;
  @ViewChild('tema5') tema5!: ElementRef;
  @ViewChild('tema6') tema6!: ElementRef;
  @ViewChild('tema7') tema7!: ElementRef;
  @ViewChild('tema_s1') tema_s1!: ElementRef;
  @ViewChild('tema_s2') tema_s2!: ElementRef;
  @ViewChild('tema_s3') tema_s3!: ElementRef;
  @ViewChild('tema_s4') tema_s4!: ElementRef;

  // @HostListener('mouseenter', ['.tema-c']) onMouseEnter() {
  //   gsap.to(this.comp_p_1.img.nativeElement, {y: 140, duration: 1})
  //   gsap.to(this.comp_p_1.description.nativeElement, {y: -128, duration: 1, delay: 1, backgroundColor: '#00f', color: '#fff'})
  // }


  // Temas Primarios push
  onClickHero() {

    if ( this.tema1.nativeElement.checked == false) {
    this.temasPrimarios.push(this.heros)

    console.log(this.temasPrimarios);
  } else {
    this.temasPrimarios.pop(this.heros)
  }
}
  onClickObject() {
    if ( this.tema2.nativeElement.checked == false) {

      this.temasPrimarios.push(this.objects)
      console.log(this.temasPrimarios);
    } else {
      this.temasPrimarios.pop(this.objects)
    }
  }

  onClickMovies() {
    if ( this.tema4.nativeElement.checked == false) {

      this.temasPrimarios.push(this.objects)
      console.log(this.temasPrimarios);
    } else {
      this.temasPrimarios.pop(this.objects)
    }
  }
  onClickAnimais() {
    if ( this.tema5.nativeElement.checked == false) {

      this.temasPrimarios.push(this.animais)
      console.log(this.temasPrimarios);
    } else {
      this.temasPrimarios.pop(this.animais)
    }
  }
  onClickFolclore() {
    if ( this.tema6.nativeElement.checked == false) {

      this.temasPrimarios.push(this.folclore)
      console.log(this.temasPrimarios);
    } else {
      this.temasPrimarios.pop(this.folclore)
    }
  }


  // Temas Secundarios push

  onClickOffices() {
    if ( this.tema_s1.nativeElement.checked == false) {

      this.temasSecundarios.push(this.office)
      console.log(this.temasSecundarios);
    } else {
      this.temasSecundarios.pop(this.office)
    }
  }
  onClickAdjetivos() {
    if ( this.tema_s2.nativeElement.checked == false) {

      this.temasSecundarios.push(this.adjetivos)
    } else {
      this.temasSecundarios.pop(this.adjetivos)
    }
  }
  onClickEtnias() {
    if ( this.tema_s3.nativeElement.checked == false) {

      this.temasSecundarios.push(this.etnias)
    } else {
      this.temasSecundarios.pop(this.etnias)
    }
  }
  onClickCaracteristicas() {
    if ( this.tema_s4.nativeElement.checked == false) {

      this.temasSecundarios.push(this.Caracteristicas)
    } else {
      this.temasSecundarios.pop(this.Caracteristicas)
    }
  }

  finishSelect(temasPrimarios: any) {
      this.temasService.temasPrimarios = this.temasPrimarios;
      this.temasService.temasSecundarios = this.temasSecundarios;
      this.temasService.emitirClique(temasPrimarios);

  }

  ngOnInit() {

  }

  personSelect: number = NaN
  temaSelect: number = NaN
  temasPrimarios: any = [];
  temasSecundarios: any = [];


  isAlive: boolean = true
  initialIsDead = false
  isDisappear: boolean = false;

  @ViewChild('conteinerTema') conteinerTema!: ElementRef;
  @ViewChild('conteinerBig') conteinerBig!: ElementRef;

  @ViewChildren(TemasPrimariosComponent) comp!: QueryList<TemasPrimariosComponent>

  ngAfterViewInit() {
    console.log(this.comp);

  }


  onChangeAlive() {
    gsap.to(this.conteinerBig.nativeElement, { y: -1000, transition: 1, opacity: 0, ease: "power3.out" })

    setTimeout(() => {
      this.isAlive = false
    }, 1300);

    setTimeout(() => {
      gsap.to(this.conteinerTema.nativeElement, { y: 200, transition: 1, opacity: 1, ease: "power3.out" })
      this.comp.forEach((comp, i) => {
        gsap.to(comp.sectionElement.nativeElement,  {
          y: "0%",
          transition: 1,
          opacity: 1,
          delay: i * 0.20,
          ease: "bounce.out"})
      })
    }, 1400, );
  }
  heros: Temas[] = [
    { name: "Aquaman", url: "../../../assets/img/aquaman.png", tema: "Herói" },
    { name: "Batman", url: "../../../assets/img/batman.png", tema: "Herói" },
    { name: "Bolsonaro", url: "../../../assets/img/bolsonaro.png", tema: "Herói" },
    { name: "Charada", url: "../../../assets/img/charada.png", tema: "Herói" },
    { name: "Coringa", url: "../../../assets/img/coringa.png", tema: "Herói" },
    { name: "Ciclópe", url: "../../../assets/img/ciclope.png", tema: "Herói" },
    { name: "Duas caras", url: "../../../assets/img/duas-caras.png", tema: "Herói" },
    { name: "Demolidor", url: "../../../assets/img/demolidor.png", tema: "Herói" },
    // { name: "Duende Verde", url: "url", tema: "Herói" },
    // { name: "Flash", url: "url", tema: "Herói" },
    { name: "Homem-Aranha", url: "../../../assets/img/miranha.png", tema: "Herói" },
    { name: "Hulk", url: "../../../assets/img/hulk.png", tema: "Herói" },
    // { name: "Mutano", url: "url", tema: "Herói" },
    // { name: "Lanterna Verde", url: "url", tema: "Herói" },
    { name: "Lex Luthor", url: "../../../assets/img/lex-luthor.png", tema: "Herói" },
    { name: "Loki", url: "../../../assets/img/loki.png", tema: "Herói" },
    { name: "Lula", url: "../../../assets/img/lula.png", tema: "Herói" },
    // { name: "Pinguim", url: "url", tema: "Herói" },
    { name: "Superman", url: "../../../assets/img/super-man.png", tema: "Herói" },
    // { name: "Super Shock", url: "url", tema: "Herói" },
    { name: "Robin", url: "../../../assets/img/robin.png", tema: "Herói" },
    { name: "Thanos", url: "../../../assets/img/thanos.png", tema: "Herói" },
    { name: "Thor", url: "../../../assets/img/thor.png", tema: "Herói" },
    { name: "Venom", url: "url", tema: "Herói" },
    // { name: "Xavier", url: "url", tema: "Herói" },
  ];
  objects: Temas[] = [
    { name: "Caneca", url: "", tema: "Objetos" },
    { name: "Livro", url: "", tema: "Objetos" },
    { name: "Mouse", url: "", tema: "Objetos" },
    { name: "Geladeira", url: "", tema: "Objetos" },
    { name: "Relógio", url: "", tema: "Objetos" },
    { name: "Fone de ouvido", url: "", tema: "Objetos" },
    { name: "Lápis", url: "", tema: "Objetos" },
    { name: "Colher", url: "", tema: "Objetos" },
    { name: "Escova de dentes", url: "", tema: "Objetos" },
    { name: "Sabonete", url: "", tema: "Objetos" },
    { name: "Celular", url: "", tema: "Objetos" },
    { name: "Quadro", url: "", tema: "Objetos" },
    { name: "Chave", url: "", tema: "Objetos" },
    { name: "Bolsa", url: "", tema: "Objetos" },
    { name: "Tesoura", url: "", tema: "Objetos" },
    { name: "Relógio", url: "", tema: "Objetos" },
  ]

  personagens: Temas[] = [
    { name: "Tom", url: "", tema: "personagens" },
    { name: "Jerry", url: "", tema: "personagens" },
    { name: "Pernalonga", url: "", tema: "personagens" },
    { name: "Patolino", url: "", tema: "personagens" },
    { name: "Papa-Léguas", url: "", tema: "personagens" },
    { name: "Coyote", url: "", tema: "personagens" },
    { name: "Scooby-Doo", url: "", tema: "personagens" },
    { name: "Salsicha", url: "", tema: "personagens" },
    { name: "Fred", url: "", tema: "personagens" },
    { name: "Daphne", url: "", tema: "personagens" },
    { name: "Velma", url: "", tema: "personagens" },
    { name: "Mickey Mouse", url: "", tema: "personagens" },
    { name: "Minnie Mouse", url: "", tema: "personagens" },
    { name: "Pato Donald", url: "", tema: "personagens" },
    { name: "Huguinho", url: "", tema: "personagens" },
    { name: "Zezinho", url: "", tema: "personagens" },
    { name: "Luizinho", url: "", tema: "personagens" },
    { name: "Tio Patinhas", url: "", tema: "personagens" },
    { name: "Capitão Caverna", url: "", tema: "personagens" },
    { name: "Fred Flintstone", url: "", tema: "personagens" },
    { name: "Barney Rubble", url: "", tema: "personagens" },
    { name: "George Jetson", url: "", tema: "personagens" },
    { name: "Astro", url: "", tema: "personagens" },
    { name: "Jonny Quest", url: "", tema: "personagens" },
    { name: "Papai Smurf", url: "", tema: "personagens" },
    { name: "Smurfette", url: "", tema: "personagens" },
    { name: "Gargamel", url: "", tema: "personagens" },
    { name: "He-Man", url: "", tema: "personagens" },
    { name: "She-Ra", url: "", tema: "personagens" },
    { name: "Lion-O", url: "", tema: "personagens" },
    { name: "Dexter", url: "", tema: "personagens" },
    { name: "Johnny Bravo", url: "", tema: "personagens" },
    { name: "Taz-Mania", url: "", tema: "personagens" },
    { name: "O Grinch", url: "", tema: "personagens" },
    { name: "Ursinho Pooh", url: "", tema: "personagens" },
    { name: "Ió", url: "", tema: "personagens" },
    { name: "Dora Aventureira", url: "", tema: "personagens" },
    { name: "Lula Molusco", url: "", tema: "personagens" },
    { name: "Patrick Estrela", url: "", tema: "personagens" },
    { name: "Bob Esponja", url: "", tema: "personagens" },
    { name: "Phineas e Ferb", url: "", tema: "personagens" },
    { name: "Perry Ornitorrinco", url: "", tema: "personagens" },
    { name: "Cão Coragem", url: "", tema: "personagens" },
    { name: "Pepe Legal", url: "", tema: "personagens" },
    { name: "Catatau", url: "", tema: "personagens" },
    { name: "Zé Colmeia", url: "", tema: "personagens" },
  ];

  // Palavras secundarias

  office: Temas[] = [
    { name: "Médico(a)", url: "", tema: "profissões" },
    { name: "Advogado(a)", url: "", tema: "profissões" },
    { name: "Professor(a)", url: "", tema: "profissões" },
    { name: "Enfermeiro(a)", url: "", tema: "profissões" },
    { name: "Arquiteto(a)", url: "", tema: "profissões" },
    { name: "Programador(a)", url: "", tema: "profissões" },
    { name: "Designer gráfico(a)", url: "", tema: "profissões" },
    { name: "Contador(a)", url: "", tema: "profissões" },
    { name: "Psicólogo(a)", url: "", tema: "profissões" },
    { name: "Dentista", url: "", tema: "profissões" },
    { name: "Jornalista", url: "", tema: "profissões" },
    { name: "Veterinário(a)", url: "", tema: "profissões" },
    { name: "Publicitário(a)", url: "", tema: "profissões" },
    { name: "Chef de cozinha", url: "", tema: "profissões" },
    { name: "Policial", url: "", tema: "profissões" },
    { name: "Bombeiro(a)", url: "", tema: "profissões" },
    { name: "Fotógrafo(a)", url: "", tema: "profissões" },
    { name: "Ator/atriz", url: "", tema: "profissões" },
    { name: "Músico(a)", url: "", tema: "profissões" },
    { name: "Dançarino(a)", url: "", tema: "profissões" },
    { name: "Personal trainer", url: "", tema: "profissões" },
    { name: "Fisioterapeuta", url: "", tema: "profissões" },
    { name: "Nutricionista", url: "", tema: "profissões" },
    { name: "Escritor(a)", url: "", tema: "profissões" },
    { name: "Instrutor de Yoga", url: "", tema: "profissões" },
    { name: "Piloto(a)", url: "", tema: "profissões" },
    { name: "Encanador(a)", url: "", tema: "profissões" },
    { name: "Funcionario(a) público(a)", url: "", tema: "profissões" },
    { name: "Filósofo", url: "", tema: "profissões" },
    { name: "Ventríloquo", url: "", tema: "profissões" },
    { name: "Curandeiro", url: "", tema: "profissões" },
    { name: "Detetive particular", url: "", tema: "profissões" },
    { name: "Astrólogo", url: "", tema: "profissões" },
    { name: "Astrólogo", url: "", tema: "profissões" },
    { name: "Artista de rua", url: "", tema: "profissões" },
    { name: "Acupunturista", url: "", tema: "profissões" },
    { name: "DJ", url: "", tema: "profissões" },
    { name: "Editor de vídeos do YouTube", url: "", tema: "profissões" },
    { name: "Especialista em demolição", url: "", tema: "profissões" },
    { name: "Garimpeiro", url: "", tema: "profissões" },
    { name: "Criador de conteúdo", url: "", tema: "profissões" },
    { name: "Guia turístico", url: "", tema: "profissões" },
    { name: "ilusionista", url: "", tema: "profissões" },
    { name: "Médium", url: "", tema: "profissões" },
    { name: "Mestre em ioga", url: "", tema: "profissões" },
    { name: "Coatch", url: "", tema: "profissões" },
    { name: "Tatuador", url: "", tema: "profissões" },
    { name: "Terapeuta", url: "", tema: "profissões" },
    { name: "Cabeleireiro", url: "", tema: "profissões" },
    { name: "Artesão", url: "", tema: "profissões" },
    { name: "Youtuber", url: "", tema: "profissões" },
    { name: "Motorista de Uber", url: "", tema: "profissões" },
    { name: "Açougueiro", url: "", tema: "profissões" },
    { name: "Motoboy", url: "", tema: "profissões" },
    { name: "Babá", url: "", tema: "profissões" },
    { name: "Pedreiro", url: "", tema: "profissões" },
    { name: "Esteticista", url: "", tema: "profissões" },
    { name: "Caixa de supermercado", url: "", tema: "profissões" },
    { name: "Agente Secreto", url: "", tema: "profissões" },
    { name: "Carteiro", url: "", tema: "profissões" },
  ];

  adjetivos: Temas[] = [
    { name: "Artista", url: "", tema: "adjetivos" },
    { name: "Comunista", url: "", tema: "adjetivos" },
    { name: "Idealista", url: "", tema: "adjetivos" },
    { name: "Realista", url: "", tema: "adjetivos" },
    { name: "Feminista", url: "", tema: "adjetivos" },
    { name: "Capitalista", url: "", tema: "adjetivos" },
    { name: "Ecologista", url: "", tema: "adjetivos" },
    { name: "Otimista", url: "", tema: "adjetivos" },
    { name: "Pessimista", url: "", tema: "adjetivos" },
    { name: "Anarquista", url: "", tema: "adjetivos" },
    { name: "Futurista", url: "", tema: "adjetivos" },
    { name: "Nacionalista", url: "", tema: "adjetivos" },
    { name: "Relativista", url: "", tema: "adjetivos" },
    { name: "Racista", url: "", tema: "adjetivos" },
    { name: "Sexista", url: "", tema: "adjetivos" },
    { name: "Hippie", url: "", tema: "adjetivos" },
    { name: "Romantista", url: "", tema: "adjetivos" },
    { name: "Rockeiro", url: "", tema: "adjetivos" },
    { name: "Terrorista", url: "", tema: "adjetivos" },
    { name: "Covarde", url: "", tema: "adjetivos" },
  ];

  etnias: Temas[] = [
    { name: "Africano", url: "", tema: "etnias" },
    { name: "Árabe", url: "", tema: "etnias" },
    { name: "Asiático", url: "", tema: "etnias" },
    { name: "Chinês", url: "", tema: "etnias" },
    { name: "Indiano", url: "", tema: "etnias" },
    { name: "Italiano", url: "", tema: "etnias" },
    { name: "Japonês", url: "", tema: "etnias" },
    { name: "Latino", url: "", tema: "etnias" },
    { name: "Mexicano", url: "", tema: "etnias" },
    { name: "Russo", url: "", tema: "etnias" },
    { name: "Brasileiro", url: "", tema: "etnias" },
  ];

  Caracteristicas: Temas[] = [
    { name: "Inteligente", url: "", tema: "características" },
    { name: "Burro", url: "", tema: "características" },
    { name: "Criativo", url: "", tema: "características" },
    { name: "Mudo", url: "", tema: "características" },
    { name: "Surdo", url: "", tema: "características" },
    { name: "Cego", url: "", tema: "características" },
    { name: "Gordo", url: "", tema: "características" },
    { name: "Humilde", url: "", tema: "características" },
    { name: "Magro", url: "", tema: "características" },
    { name: "Baixo", url: "", tema: "características" },
    { name: "Novo", url: "", tema: "características" },
    { name: "Velho", url: "", tema: "características" },
    { name: "Alto", url: "", tema: "características" },
    { name: "Calvo", url: "", tema: "características" },
    { name: "Hiperativo", url: "", tema: "características" },
    { name: "Organizado", url: "", tema: "características" },
    { name: "Respeitoso", url: "", tema: "características" },
    { name: "Inovador", url: "", tema: "características" },
    { name: "Carismático", url: "", tema: "características" },
    { name: "Comunicativo", url: "", tema: "características" },
    { name: "Flexível", url: "", tema: "características" },
    { name: "Ambicioso", url: "", tema: "características" },
    { name: "Honesto", url: "", tema: "características" },
    { name: "Resiliente", url: "", tema: "características" },
    { name: "Motivado", url: "", tema: "características" },
    { name: "Paciente", url: "", tema: "características" },
    { name: "Detalhista", url: "", tema: "características" },
    { name: "Sociável", url: "", tema: "características" },
    { name: "Focado", url: "", tema: "características" },
    { name: "Visionário", url: "", tema: "características" },
    { name: "Confiante", url: "", tema: "características" },
    { name: "Consciente", url: "", tema: "características" },
    { name: "Comprometido", url: "", tema: "características" },
    { name: "Empático", url: "", tema: "características" },
  ]

  animais: Temas[] = [
    { name: "Abelha", url: "", tema: "animais" },
    { name: "Ácaro", url: "", tema: "animais" },
    { name: "Aedes aegypti", url: "", tema: "animais" },
    { name: "Agulhão", url: "", tema: "animais" },
    { name: "Águia", url: "", tema: "animais" },
    { name: "Albatroz", url: "", tema: "animais" },
    { name: "Alce", url: "", tema: "animais" },
    { name: "Alligator", url: "", tema: "animais" },
    { name: "Anaconda", url: "", tema: "animais" },
    { name: "Anchova", url: "", tema: "animais" },
    { name: "Andorinha", url: "", tema: "animais" },
    { name: "Anemona-do-mar", url: "", tema: "animais" },
    { name: "Anta", url: "", tema: "animais" },
    { name: "Antílope", url: "", tema: "animais" },
    { name: "Aranha", url: "", tema: "animais" },
    { name: "Arara", url: "", tema: "animais" },
    { name: "Arenque", url: "", tema: "animais" },
    { name: "Arraia", url: "", tema: "animais" },
    { name: "Artrópodes", url: "", tema: "animais" },
    { name: "Asno", url: "", tema: "animais" },
    { name: "Atum", url: "", tema: "animais" },
    { name: "Avestruz", url: "", tema: "animais" },
    { name: "Babuíno", url: "", tema: "animais" },
    { name: "Baleia", url: "", tema: "animais" },
    { name: "Barata", url: "", tema: "animais" },
    { name: "Beija-flor", url: "", tema: "animais" },
    { name: "Beluga", url: "", tema: "animais" },
    { name: "Besouro", url: "", tema: "animais" },
    { name: "Bicho-da-seda", url: "", tema: "animais" },
    { name: "Bisão", url: "", tema: "animais" },
    { name: "Boa-constritora", url: "", tema: "animais" },
    { name: "Borboleta", url: "", tema: "animais" },
    { name: "Boto", url: "", tema: "animais" },
    { name: "Búfalo", url: "", tema: "animais" },
    { name: "Cabra", url: "", tema: "animais" },
    { name: "Cachalote", url: "", tema: "animais" },
    { name: "Cachorro", url: "", tema: "animais" },
    { name: "Cágado", url: "", tema: "animais" },
    { name: "Calopsita", url: "", tema: "animais" },
    { name: "Camaleão", url: "", tema: "animais" },
    { name: "Camarão", url: "", tema: "animais" },
    { name: "Capivara", url: "", tema: "animais" },
    { name: "Caracol", url: "", tema: "animais" },
    { name: "Caranguejo", url: "", tema: "animais" },
    { name: "Carneiro", url: "", tema: "animais" },
    { name: "Cascavel", url: "", tema: "animais" },
    { name: "Castor", url: "", tema: "animais" },
    { name: "Cavalo", url: "", tema: "animais" },
    { name: "Cegonha", url: "", tema: "animais" },
    { name: "Centopéia", url: "", tema: "animais" },
    { name: "Cervo", url: "", tema: "animais" },
    { name: "Chimpanzé", url: "", tema: "animais" },
    { name: "Cigarra", url: "", tema: "animais" },
    { name: "Cisne", url: "", tema: "animais" },
    { name: "Cobra", url: "", tema: "animais" },
    { name: "Codorna", url: "", tema: "animais" },
    { name: "Coelho", url: "", tema: "animais" },
    { name: "Coiote", url: "", tema: "animais" },
    { name: "Condor", url: "", tema: "animais" },
    { name: "Coruja", url: "", tema: "animais" },
    { name: "Corvo", url: "", tema: "animais" },
    { name: "Crocodilo", url: "", tema: "animais" },
    { name: "Cutia", url: "", tema: "animais" },
    { name: "Dálmata", url: "", tema: "animais" },
    { name: "Dromedário", url: "", tema: "animais" },
    { name: "Doninha", url: "", tema: "animais" },
    { name: "Dragão-de-komodo", url: "", tema: "animais" },
    { name: "Eagle", url: "", tema: "animais" },
    { name: "Echidna", url: "", tema: "animais" },
    { name: "Elefante", url: "", tema: "animais" },
    { name: "Emu", url: "", tema: "animais" },
    { name: "Enguia", url: "", tema: "animais" },
    { name: "Escaravelho", url: "", tema: "animais" },
    { name: "Esquilo", url: "", tema: "animais" },
    { name: "Estrela-do-mar", url: "", tema: "animais" },
    { name: "Faisão", url: "", tema: "animais" },
    { name: "Falcão", url: "", tema: "animais" },
    { name: "Flamingo", url: "", tema: "animais" },
    { name: "Foca", url: "", tema: "animais" },
    { name: "Formiga", url: "", tema: "animais" },
    { name: "Furão", url: "", tema: "animais" },
    { name: "Gafanhoto", url: "", tema: "animais" },
    { name: "Galinha", url: "", tema: "animais" },
    { name: "Gambá", url: "", tema: "animais" },
    { name: "Ganso", url: "", tema: "animais" },
    { name: "Gato", url: "", tema: "animais" },
    { name: "Gazela", url: "", tema: "animais" },
    { name: "Girafa", url: "", tema: "animais" },
    { name: "Golfinho", url: "", tema: "animais" },
    { name: "Gorila", url: "", tema: "animais" },
    { name: "Grilo", url: "", tema: "animais" },
    { name: "Guaxinim", url: "", tema: "animais" },
    { name: "Hamster", url: "", tema: "animais" },
    { name: "Hiena", url: "", tema: "animais" },
    { name: "Hipopótamo", url: "", tema: "animais" },
    { name: "Iguana", url: "", tema: "animais" },
    { name: "Impala", url: "", tema: "animais" },
    { name: "Indri", url: "", tema: "animais" },
    { name: "Inseto-pau", url: "", tema: "animais" },
    { name: "Jacaré", url: "", tema: "animais" },
    { name: "Jacu", url: "", tema: "animais" },
    { name: "Jaguar", url: "", tema: "animais" },
    { name: "Jaguatirica", url: "", tema: "animais" },
    { name: "Jamanta", url: "", tema: "animais" },
    { name: "Jandaia", url: "", tema: "animais" },
    { name: "Jararaca", url: "", tema: "animais" },
    { name: "Javali", url: "", tema: "animais" },
    { name: "Jegue", url: "", tema: "animais" },
    { name: "Jiboia", url: "", tema: "animais" },
    { name: "Joaninha", url: "", tema: "animais" },
    { name: "Jumento", url: "", tema: "animais" },
    { name: "Kanguru", url: "", tema: "animais" },
    { name: "Kiwi", url: "", tema: "animais" },
    { name: "Koala", url: "", tema: "animais" },
    { name: "Labrador", url: "", tema: "animais" },
    { name: "Lagarta", url: "", tema: "animais" },
    { name: "Lagartixa", url: "", tema: "animais" },
    { name: "Lagarto", url: "", tema: "animais" },
    { name: "Lambari", url: "", tema: "animais" },
    { name: "Lampreia", url: "", tema: "animais" },
    { name: "Lavadeira", url: "", tema: "animais" },
    { name: "Leão", url: "", tema: "animais" },
    { name: "Leão-marinho", url: "", tema: "animais" },
    { name: "Lebre", url: "", tema: "animais" },
    { name: "Leopardo", url: "", tema: "animais" },
    { name: "Lhama", url: "", tema: "animais" },
    { name: "Lince", url: "", tema: "animais" },
    { name: "Lobo", url: "", tema: "animais" },
    { name: "Lontra", url: "", tema: "animais" },
    { name: "Loro", url: "", tema: "animais" },
    { name: "Lula", url: "", tema: "animais" },
    { name: "Macaco", url: "", tema: "animais" },
    { name: "Macaquinho", url: "", tema: "animais" },
    { name: "Mamute", url: "", tema: "animais" },
    { name: "Mandril", url: "", tema: "animais" },
    { name: "Mariposa", url: "", tema: "animais" },
    { name: "Marmota", url: "", tema: "animais" },
    { name: "Medusa", url: "", tema: "animais" },
    { name: "Mexilhão", url: "", tema: "animais" },
    { name: "Morsa", url: "", tema: "animais" },
    { name: "Mosca", url: "", tema: "animais" },
    { name: "Mosquito", url: "", tema: "animais" },
    { name: "Mula", url: "", tema: "animais" },
    { name: "Morcego", url: "", tema: "animais" },
    { name: "Muriçoca", url: "", tema: "animais" },
    { name: "Musaranho", url: "", tema: "animais" },
    { name: "Morcego", url: "", tema: "animais" },
    { name: "Naja", url: "", tema: "animais" },
    { name: "Narval", url: "", tema: "animais" },
    { name: "Onça-parda", url: "", tema: "animais" },
    { name: "Onça-pintada", url: "", tema: "animais" },
    { name: "Orangotango", url: "", tema: "animais" },
    { name: "Orcas", url: "", tema: "animais" },
    { name: "Ornitorrinco", url: "", tema: "animais" },
    { name: "Ostra", url: "", tema: "animais" },
    { name: "Ouriço", url: "", tema: "animais" },
    { name: "Ovelha", url: "", tema: "animais" },
    { name: "Paca", url: "", tema: "animais" },
    { name: "Panda", url: "", tema: "animais" },
    { name: "Pangolim", url: "", tema: "animais" },
    { name: "Papa-capim", url: "", tema: "animais" },
    { name: "Papagaio", url: "", tema: "animais" },
    { name: "Pardal", url: "", tema: "animais" },
    { name: "Pato", url: "", tema: "animais" },
    { name: "Peixe", url: "", tema: "animais" },
    { name: "Peixe-espada", url: "", tema: "animais" },
  ];
  folclore: Temas[] = [
    { name: "Boitatá", url: "", tema: "folclore" },
    { name: "Boto-cor-de-rosa", url: "", tema: "folclore" },
    { name: "Caipora", url: "", tema: "folclore" },
    { name: "Capelobo", url: "", tema: "folclore" },
    { name: "Cobra Grande", url: "", tema: "folclore" },
    { name: "Corpo-Seco", url: "", tema: "folclore" },
    { name: "Curupira", url: "", tema: "folclore" },
    { name: "Cuca", url: "", tema: "folclore" },
    { name: "Fada do Dente", url: "", tema: "folclore" },
    { name: "Iara", url: "", tema: "folclore" },
    { name: "Lobisomem", url: "", tema: "folclore" },
    { name: "Mãe d'Água", url: "", tema: "folclore" },
    { name: "Matinta Perera", url: "", tema: "folclore" },
    { name: "Mula Sem Cabeça", url: "", tema: "folclore" },
    { name: "Negrinho do Pastoreio", url: "", tema: "folclore" },
    { name: "Saci-Pererê", url: "", tema: "folclore" },
    { name: "Chupa-cabra", url: "", tema: "folclore" },
    { name: "Loira do Banheiro", url: "", tema: "folclore" },
    { name: "Zumbi", url: "", tema: "folclore" },
    { name: "Chico Xavier", url: "", tema: "folclore" },
    { name: "Bicho Papão", url: "", tema: "folclore" },
    { name: "Múmia", url: "", tema: "folclore" },
    { name: "Vampiro", url: "", tema: "folclore" },
    { name: "Annabelle", url: "", tema: "terror" },
    { name: "Chucky", url: "", tema: "terror" },
    { name: "Drácula", url: "", tema: "terror" },
    { name: "Freddy Krueger", url: "", tema: "terror" },
    { name: "Ghostface", url: "", tema: "terror" },
    { name: "Jigsaw", url: "", tema: "terror" },
    { name: "Jason", url: "", tema: "terror" },
    { name: "Leatherface", url: "", tema: "terror" },
    { name: "Michael Myers", url: "", tema: "terror" },
    { name: "Pennywise", url: "", tema: "terror" },
    { name: "Samara", url: "", tema: "terror" },
    { name: "Slender Man", url: "", tema: "terror" },
    { name: "Kraken", url: "", tema: "terror" },
    { name: "O Fantasma da Ópera", url: "", tema: "terror" },
  ];
}
