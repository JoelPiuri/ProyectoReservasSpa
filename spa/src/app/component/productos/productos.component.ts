import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit{
  aceitesCorporales: any[] = [];
  cremasCorporales: any[] = [];
  exfoliantesCorporales: any[] = [];
  mascarillas: any[] = [];
  tonicos: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsFromBackend();
  }

  loadProductsFromBackend(): void {
    this.productService.getProducts().subscribe(data => {
      this.aceitesCorporales = data.filter((product: any) => product.category === 'aceites');
      this.cremasCorporales = data.filter((product: any) => product.category === 'cremas');
      this.exfoliantesCorporales = data.filter((product: any) => product.category === 'exfoliantes');
      this.mascarillas = data.filter((product: any) => product.category === 'mascarillas');
      this.tonicos = data.filter((product: any) => product.category === 'tonicos');
    });
  }
}
  // aceitesCorporales = [
  //   { img: 'css/img/p1.jpg', name: 'Aceite de Masaje Corporal Anti-stress', description: 'Uso Profesional<br>Aceite de Masaje Corporal<br>Facilita la eficacia del Masaje y Relajación', price: '$25.67' },
  //   { img: 'css/img/p2.jpg', name: 'Aceite de Masaje Corporal Calm', description: 'Uso Profesional<br>Aceite de Masaje Corporal<br>Facilita la eficacia del Masaje y Relajación', price: '$25.67' },
  //   { img: 'css/img/p3.jpg', name: 'Aceite de Masaje Corporal Harmony', description: 'Uso Profesional<br>Aceite de Masaje Corporal<br>Facilita la eficacia del Masaje y Relajación', price: '$25.67' },
  // ];

  // cremasCorporales = [
  //   { img: 'css/img/c1.jpg', name: 'Crema de Masaje Corporal Anti-stress', description: 'Uso Profesional<br>Para Todo Tipo de Piel<br>Crema de Masaje Corporal<br>Enriquecido con Aceite de Almendras', price: '$25.67' },
  //   { img: 'css/img/c2.jpg', name: 'Crema de Masaje Corporal Calm', description: 'Uso Profesional<br>Para Todo Tipo de Piel<br>Crema de Masaje Corporal<br>Enriquecido con Aceite de Oliva', price: '$25.67' },
  //   { img: 'css/img/c3.jpg', name: 'Crema de Masaje Corporal Harmony', description: 'Uso Profesional<br>Para Todo Tipo de Piel<br>Crema de Masaje Corporal<br>Enriquecido con Aceite de Girasol', price: '$25.67' },
  // ];

  // exfoliantesCorporales = [
  //   { img: 'css/img/e1.jpg', name: 'Exfoliante Corporal Calm', description: 'Para Todo Tipo de Piel<br>Exfoliante Corporal<br>Exfoliante a base de azúcar<br>Humecta y elimina impurezas de la piel', price: '$16.43' },
  //   { img: 'css/img/e2.jpg', name: 'Exfoliante Corporal Harmony', description: 'Para Todo Tipo de Piel<br>Exfoliante Corporal<br>Exfoliante a base de azúcar<br>Humecta y elimina impurezas de la piel', price: '$16.43' },
  //   { img: 'css/img/e3.jpg', name: 'Exfoliante Corporal Sensual', description: 'Para Todo Tipo de Piel<br>Exfoliante Corporal<br>Exfoliante a base de azúcar<br>Humecta y elimina impurezas de la piel', price: '$11.81' },
  // ];

  // mascarillas = [
  //   { img: 'css/img/m1.jpg', name: 'Mascarilla de Azuleno', description: 'Para Piel Seca o Sensible<br>Con extracto de Manzanilla<br>Mascarilla Reparadora', price: '$20.54' },
  //   { img: 'css/img/m2.jpg', name: 'Mascarilla Purificante', description: 'Para piel mixta a grasa<br>Deja la piel suave<br>Minimiza poros abiertos', price: '$20.54' },
  // ];

  // tonicos = [
  //   { img: 'css/img/t1.jpg', name: 'Tónico Equilibrante Facial', description: 'Para Piel Seca o Sensible<br>Libre de alcohol<br>Enriquecido con extracto de jengibre y maca<br>Tonifica y humecta la piel', price: '$25.67' },
  //   { img: 'css/img/t2.jpg', name: 'Tónico Purificante Facial', description: 'Para Piel Mixta o Grasa<br>Libre de alcohol<br>Tónico Calmante<br>Con Péptidos de Zinc & Caléndula', price: '$25.67' },
  // ];
