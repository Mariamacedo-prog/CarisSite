import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info={
    subtitulo: "Lorem Ipsum is simply dummy text of the printing and. ",
    texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
  }
  showQuemSomos:boolean = false;
  constructor(

  ) { }

  ngOnInit(): void {
  }


  
    @HostListener("window:scroll", []) onWindowScroll() {
        // do some stuff here when the window is scrolled
        const verticalOffset = window.pageYOffset 
              || document.documentElement.scrollTop 
              || document.body.scrollTop || 0;

        if(verticalOffset >= 210){
          this.showQuemSomos = true
        }else{
          this.showQuemSomos = false
        }
    }
  
  images = [
    {
      img: 'https://aga.arq.br/wp-content/uploads/2018/01/SITE-AGA_SANTA-MARIA_01.jpg',
      alt: "imagem 5", 
      text: {
        title: "SLIM CAICHOEIRINHA", subtitle: "CONDOMÍNIO CLUBE", status: "FUTURO LANÇAMENTO"
      }
      
    },
    {
      img: 'https://static.ndmais.com.br/2021/11/s-96.jpeg',
      alt: "imagem 2", 
      text: {
        title: "TATUAPÉ", subtitle: "CONDOMÍNIO MAQUE APÉIR", status: "EM OBRAS"
      }
    },
    {
      img: 'https://revistaarea.com.br/wp-content/uploads/2021/07/MTF_M_EMBASAMENTO_EF.jpg',
      alt: "imagem 1", 
      text: {
        title: "LUZ DE IGUANTE", subtitle: "CONDOMÍNIO PAZ DE IGUANTE", status: "EM OBRAS"
      }
    },
    {
      img: 'https://www.esportividade.com.br/wp-content/uploads/2022/05/platina220-e1652986456580.jpg',
      alt: "imagem 3", 
      text: {
        title: "365 dsasa Of weddings a year", subtitle: "magem 2 aDASAr", status: "LANÇADO"
      }
    },
    {
      img: 'https://www.construtoradiamond.com.br/arquivo/noticia/fachada-aerea-editado-com-logo.jpg',
      alt: "imagem 4", 
      text: {
        title: "SOLA DA FORTUNA", subtitle: "CONDOMÍNIO REZARES", status: "LANÇADO"
      }
    },
    {
      img: 'https://www.caupi.gov.br/wp-content/uploads/2021/08/foto-2.jpg',
      alt: "imagem 6", 
      text: {
        title: "QUERIANTE DE LA PUERTA", subtitle: "CONDOMÍNIO DE LA FUETA", status: "FUTURO LANÇAMENTO"
      }
    }
  ];
}
