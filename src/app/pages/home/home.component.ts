import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info={
    subtitulo: "",
    texto: "",
    simboloLogo: ""
  }
  imageBase64 = {
    facebook: "",
    instagram: "",
    twitter: "",
    arrowRight: ""
  }

  imagesCarousel = [
    {
      img: "",
      alt: "",
      link: "",
      text: {
        title: "", subtitle: "", status: ""
      }
      
    }
  ];

  imagesSlider = [
    {
      img: "",
      alt: "",
      link: {
        href: "",
        blanc: false

      },
      text: {
        title: "", subtitle: "", status: ""
      }
      
    }
  ];

  sociaisMedias={
    facebook: '',
    instagram: '',
    twitter: ''
  }
  showQuemSomos = true;
  constructor(
    private dataService: DataService
  ) { }

  async ngOnInit() {
    document.documentElement.scrollTop = -2000;
    const result = await this.dataService.getData().subscribe((data: any) =>{
      this.info = data.carisInfo;
      this.imagesCarousel = data.carouselArray;
      this.imagesSlider = data.sliderArray;
      this.sociaisMedias = data.carisInfo;
      this.imageBase64 = data.imageBase64;
    })
  }
  


  
    @HostListener("window:scroll", []) onWindowScroll() {
        // do some stuff here when the window is scrolled
        const verticalOffset = document.documentElement.scrollTop;
    }
  

  goToZero(){
    document.documentElement.scrollTop = 0;
  }
}
