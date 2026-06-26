import { Component } from '@angular/core';
import { UtilityNavComponent } from './components/header/utility-nav.component';
import { GlobalNavComponent } from './components/header/global-nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EmpowerComponent } from './components/empower/empower.component';
import { CryptoExpertsComponent } from './components/crypto-experts/crypto-experts.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UtilityNavComponent,
    GlobalNavComponent,
    HeroComponent,
    TickerComponent,
    TabsComponent,
    EmpowerComponent,
    CryptoExpertsComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <div class="min-h-screen">
      <header>
        <app-utility-nav />
        <app-global-nav />
      </header>
      <main>
        <app-hero />
        <app-ticker />
        <app-tabs />
        <app-empower />
        <app-crypto-experts />
        <app-cta />
      </main>
      <app-footer />
    </div>
  `
})
export class App {}
