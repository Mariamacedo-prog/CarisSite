import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  carisInfo = {
    rua: "",
    numero: "",
    complemento: "",
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
  })

  }

  goToStart(){
    document.documentElement.scrollTop = -2000;
  }
}
