import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  arrowUpBase = "";
  carisInfo = {
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
    email: "",
    facebook: "",
    instagram: "",
    twitter: ""
  }
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    const result = await this.dataService.getData().subscribe((data: any) =>{
      this.carisInfo = data.carisInfo;
      this.arrowUpBase = data.imageBase64.arrowUp;
      console.log(data.imageBase64)
  })

  }

  goToStart(){
    document.documentElement.scrollTop = -2000;
  }
}
