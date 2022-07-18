import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caris';


  images = [
    {
      img: 'https://aga.arq.br/wp-content/uploads/2018/01/SITE-AGA_SANTA-MARIA_01.jpg',
      alt: "imagem 5", 
      text: {
        title: "365 dsasa Of weddings a year", subtitle: "magem 2 aDASAr"
      }
      
    },
    {
      img: 'https://static.ndmais.com.br/2021/11/s-96.jpeg',
      alt: "imagem 2", 
      text: {
        title: "365 dsasa Of weddings a year", subtitle: "magem 2 aDASAr"
      }
    },
    {
      img: 'https://revistaarea.com.br/wp-content/uploads/2021/07/MTF_M_EMBASAMENTO_EF.jpg',
      alt: "imagem 1", 
      text: {
        title: "365 dsasa Of weddings a year", subtitle: "magem 2 aDASAr"
      }
    },
    {
      img: 'https://www.esportividade.com.br/wp-content/uploads/2022/05/platina220-e1652986456580.jpg',
      alt: "imagem 3", 
      text: {
        title: "365 dsasa Of weddings a year", subtitle: "magem 2 aDASAr"
      }
    },
    {
      img: 'https://www.construtoradiamond.com.br/arquivo/noticia/fachada-aerea-editado-com-logo.jpg',
      alt: "imagem 4", 
      text: {
        title: "365 dsasa Of weddings a year", subtitle: "magem 2 aDASAr"
      }
    },
    {
      img: 'https://www.caupi.gov.br/wp-content/uploads/2021/08/foto-2.jpg',
      alt: "imagem 6", 
      text: {
        title: "365 dsasa Of weddings a year", subtitle: "magem 2 aDASAr"
      }
    }
  ];

}
