import { Component, OnInit } from '@angular/core';

let viz;
declare var tableau;

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})

export class ResumenComponent implements OnInit {

  constructor() {}

    ngOnInit() {
        const containerDiv = document.getElementById('vizContainerResumen'),
        urlViz = 'https://public.tableau.com/views/Deuda_comercial_y_transf_contabilizada_con_terceros_2018_AyuntamientoMAM/Resumen',
        options = {
          // width: "1800px",
          // height: "800px",
          hideTabs: true,
          showShareOptions: true
        };
        viz = new tableau.Viz(containerDiv, urlViz, options);
    }
  }
