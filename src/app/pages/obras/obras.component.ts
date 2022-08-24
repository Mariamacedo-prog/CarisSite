import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { SliderImage } from '../../interfaces'
@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss']
})
export class ObrasComponent implements OnInit {
  imagesSlider: SliderImage[] = [];
  imagesEntregue: SliderImage[] = [];
  imageBackground: any = {};
  activeOption = "TODOS";
  constructor( private dataService: DataService) { }
  async ngOnInit() {
    document.documentElement.scrollTop = -2000;
    const result = await this.dataService.getData().subscribe((data: any) =>{
      this.imagesSlider = data.sliderArray;
      this.imageBackground = data.empreendimentos.imgBackground;
      const filter = data.sliderArray.filter((item: any) => item.statusEnum  == 'ENTREGUE');
      this.imagesEntregue = filter;
    });
  }

  async filterSlider(type: string){
    this.activeOption = type;
    const result = await this.dataService.getData().subscribe((data: any) =>{
      if(type !== 'TODOS'){
        const filter = data.sliderArray.filter((item: any) => item.statusEnum  == type);
        this.imagesSlider = filter;
      }else{
        this.imagesSlider = data.sliderArray;
      }
    });
  }

}
