import { Component, OnInit } from '@angular/core';

let viz;
declare var tableau;

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  vez = 0;

  constructor() { }

  ngOnInit() {
    let vez = 0;
    function initVizResumen() {
      vez += 1;
      if (vez > 1) {
        viz.dispose();
      }

      const containerDiv = document.getElementById('vizContainerDetalle'),
        urlResumen = "https://public.tableau.com/views/Deuda_comercial_y_transf_contabilizada_con_terceros_2018_AyuntamientoMAM/Detalle",
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
