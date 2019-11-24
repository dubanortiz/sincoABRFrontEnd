import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AcademicalService } from "../../../services/academical.service";
import { ToastrService } from 'ngx-toastr';
import * as pdfJS from "jspdf";
import "jspdf-autotable"
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  datosreport:any;

  constructor(private toastr: ToastrService, private academicalService:AcademicalService) { }
  
  ngOnInit() {
    
  }
  DownloadPDF(){
    const a = new pdfJS('p','pt','a4');
    this.academicalService.GetReport().subscribe(val=>{
      this.datosreport=val
      let bodyReport=[];
      this.datosreport.forEach(element => {
        let fila = [element.asignatura, element.docentes, element.estudiante, element.periodo, element.nota]
        bodyReport.push(fila)    
      });
      a.autoTable(
        {
          head:[['Asignatura', 'Docentes', 'Estudiante', 'Periodo', 'Notas']],
          body:bodyReport
        }
      );
      a.save('ReportGeneral.pdf')
    });

    
  
  }
}
