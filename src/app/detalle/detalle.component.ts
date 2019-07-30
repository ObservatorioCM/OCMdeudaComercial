import { Component, OnInit } from '@angular/core';

let viz;
declare var tableau;

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      const containerDiv = document.getElementById('vizContainerDetalle'),
        urlViz = "https://public.tableau.com/views/Deuda_comercial_y_transf_contabilizada_con_terceros_2018_AyuntamientoMAM/Detalle",
        options = {
          // width: "1800px",
          // height: "800px",
          hideTabs: true,
          showShareOptions: true
        };
      viz = new tableau.Viz(containerDiv, urlViz, options);
    }
  }
