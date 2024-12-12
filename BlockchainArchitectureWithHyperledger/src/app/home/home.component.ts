import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private router: Router,

  ) { }
  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
// import { Component, OnDestroy } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnDestroy {
//   currentIndex: number = 0;
//   totalSlides: number = 0;
//   autoSlideInterval: any;

//   constructor(private router: Router) {}

//   ngAfterViewInit() {
//     // Obtén el número total de elementos del carrusel después de cargar la vista
//     this.totalSlides = document.querySelectorAll('.carousel-item').length;

//     // Inicia el cambio automático de diapositivas
//     this.startAutoSlide();
//   }

//   ngOnDestroy() {
//     // Limpia el intervalo cuando el componente se destruye
//     this.stopAutoSlide();
//   }

//   showSlide(index: number) {
//     const carousel = document.querySelector('.carousel') as HTMLElement;

//     if (index >= this.totalSlides) {
//       this.currentIndex = 0;
//     } else if (index < 0) {
//       this.currentIndex = this.totalSlides - 1;
//     } else {
//       this.currentIndex = index;
//     }

//     carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
//   }

//   nextSlide() {
//     this.showSlide(this.currentIndex + 1);
//   }

//   prevSlide() {
//     this.showSlide(this.currentIndex - 1);
//   }

//   // Función para iniciar el cambio automático de diapositivas
//   startAutoSlide() {
//     this.autoSlideInterval = setInterval(() => {
//       this.nextSlide();
//     }, 3000); // Cambia cada 3 segundos
//   }

//   // Función para detener el cambio automático de diapositivas
//   stopAutoSlide() {
//     if (this.autoSlideInterval) {
//       clearInterval(this.autoSlideInterval);
//     }
//   }

//   redirectTo(route: string) {
//     this.router.navigate([route]);
//   }
// }
