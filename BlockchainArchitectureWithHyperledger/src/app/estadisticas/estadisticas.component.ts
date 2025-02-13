import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import Chart from 'chart.js/auto';

@Component({
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})

export class EstadisticasComponent implements OnInit {
  constructor(private router: Router) {}

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  displayedColumns: string[] = ['device_id', 'sensor', 'tiempo', 'valor'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  fechas: string[] = ['2023-12-01', '2023-12-02', '2023-12-03'];
  filtroFecha: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cargarGrafico();
  }

  cargarGrafico() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sensor 1', 'Sensor 2', 'Sensor 3'],
        datasets: [
          {
            label: 'Valores',
            data: [56, 39, 17],
            backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
            borderColor: ['#388e3c', '#e65100', '#c62828'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Estadísticas de Sensores',
            font: {
              size: 18,
              weight: 'bold',
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }  

  aplicarFiltro() {
    this.dataSource.filter = this.filtroFecha.trim().toLowerCase();
  }
}

const ELEMENT_DATA = [
  { device_id: '4e-4f-4d-42', sensor: 'UV Level=0/u000', tiempo: '24:00:00', valor: 56 },
  { device_id: '4e-4f-4d-42', sensor: 'UV Level=0/u000', tiempo: '24:00:00', valor: 39 },
  { device_id: '4e-4f-4d-42', sensor: 'UV Level=0/u000', tiempo: '24:00:00', valor: 17 },
];
