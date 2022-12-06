import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  public chart: any = [];
  public labels: any = [];
  public dataValues: any = [];

  constructor(private articuloServicio:ArticuloService, private router:Router) {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    this.articuloServicio.mostrarGrafica().subscribe((dato) => {
      this.labels = [];
      this.dataValues = [];

      dato.forEach((element) => {
        console.log(element);
        this.labels.push(element.Key);
        this.dataValues.push(element.Cantidad);
      });

      var chartExist = Chart.getChart('GraficaChart');
      if (chartExist) chartExist.destroy();

      this.getCharData();9

    });
  }

  getCharData(): any {

    const labels = this.labels;
    console.log(this.dataValues);
    return new Chart('GraficaChart', {
      
        type: 'line',
        data: {
          labels: labels,
          datasets: [
          {
            label: 'Articulos',
            data: this.dataValues,
            borderColor: '#063970',
            backgroundColor: '#1e81b0',
            type: 'bar'
          }  
        ]
      },  
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Articulos Vendidos'
            }
          },
          scales: {
            y: {
              stacked: true
            }
          }
        },    
    });
  };
}
