import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { EmpowerComponent } from './components/empower/empower.component';
import { ProductsComponent } from './components/products/products.component';
import { ResearchComponent } from './components/research/research.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    TickerComponent,
    EmpowerComponent,
    ProductsComponent,
    ResearchComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-ticker />
      <app-empower />
      <app-products />
      <app-research />
    </main>
    <app-footer />
  `
})
export class App {}
