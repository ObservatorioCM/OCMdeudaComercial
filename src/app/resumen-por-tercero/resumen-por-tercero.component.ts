import { Component, OnInit } from '@angular/core';

// declare var $: any;
// Si uso declare var viz  da error porque no esta declarada como global
let viz;
declare var tableau;

@Component({
  selector: 'app-resumen-por-tercero',
  templateUrl: './resumen-por-tercero.component.html',
  styleUrls: ['./resumen-por-tercero.component.css']
})
export class ResumenPorTerceroComponent implements OnInit {
  vez = 0;

  constructor() {}

  ngOnInit() {
    let vez = 0;
    function initVizResumen() {
      vez += 1;
      if (vez > 1) {
        viz.dispose();
      }

      const containerDiv = document.getElementById('vizContainerResumen'),
        urlResumen = "https://public.tableau.com/views/Deuda_comercial_y_transf_contabilizada_con_terceros_2018_AyuntamientoMAM/Resumen",
        options = {
          width: "1800px",
          height: "800px",
          hideTabs: true,
          showShareOptions: true
        };
      viz = new tableau.Viz(containerDiv, urlResumen, options);
    }
    initVizResumen();
  }

}
