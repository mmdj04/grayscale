import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative w-full h-screen bg-blackberry overflow-hidden flex items-center justify-center">
      <!-- Top-left geometric shapes -->
      <svg
        class="absolute top-0 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Large triangle -->
        <polygon points="0,0 200,0 100,120" fill="#4a4080" opacity="0.7"/>
        <!-- Medium triangle -->
        <polygon points="80,0 280,0 180,140" fill="#5a50a0" opacity="0.5"/>
        <!-- Small triangle -->
        <polygon points="160,0 320,0 240,100" fill="#6a60b0" opacity="0.4"/>
        <!-- Diamond shape -->
        <polygon points="120,60 200,0 280,60 200,120" fill="#3d3570" opacity="0.6"/>
        <!-- Another triangle -->
        <polygon points="0,80 160,80 80,180" fill="#524890" opacity="0.45"/>
        <!-- Smaller diamond -->
        <polygon points="60,120 120,60 180,120 120,180" fill="#4a4080" opacity="0.55"/>
        <!-- Triangle overlay -->
        <polygon points="40,160 200,160 120,260" fill="#5e54a8" opacity="0.35"/>
        <!-- Small accent triangle -->
        <polygon points="180,40 260,40 220,100" fill="#7068b8" opacity="0.3"/>
        <!-- Extra diamond -->
        <polygon points="0,200 80,140 160,200 80,260" fill="#443c78" opacity="0.5"/>
        <!-- Triangle -->
        <polygon points="100,180 240,180 170,280" fill="#564c98" opacity="0.3"/>
        <!-- Small shapes -->
        <polygon points="200,80 260,80 230,130" fill="#6258a8" opacity="0.25"/>
        <polygon points="280,0 360,0 320,70" fill="#4e4490" opacity="0.4"/>
        <polygon points="240,120 320,60 400,120 320,180" fill="#3a3268" opacity="0.35"/>
      </svg>

      <!-- Bottom-right geometric shapes -->
      <svg
        class="absolute bottom-0 right-0 w-[450px] h-[450px] md:w-[550px] md:h-[550px]"
        viewBox="0 0 550 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Large triangle -->
        <polygon points="550,550 350,550 450,430" fill="#4a4080" opacity="0.7"/>
        <!-- Medium triangle -->
        <polygon points="470,550 270,550 370,410" fill="#5a50a0" opacity="0.5"/>
        <!-- Small triangle -->
        <polygon points="390,550 230,550 310,450" fill="#6a60b0" opacity="0.4"/>
        <!-- Diamond shape -->
        <polygon points="430,490 350,550 270,490 350,430" fill="#3d3570" opacity="0.6"/>
        <!-- Another triangle -->
        <polygon points="550,470 390,470 470,370" fill="#524890" opacity="0.45"/>
        <!-- Smaller diamond -->
        <polygon points="490,430 430,490 370,430 430,370" fill="#4a4080" opacity="0.55"/>
        <!-- Triangle overlay -->
        <polygon points="510,390 350,390 430,290" fill="#5e54a8" opacity="0.35"/>
        <!-- Small accent triangle -->
        <polygon points="370,510 290,510 330,450" fill="#7068b8" opacity="0.3"/>
        <!-- Extra diamond -->
        <polygon points="550,350 470,410 390,350 470,290" fill="#443c78" opacity="0.5"/>
        <!-- Triangle -->
        <polygon points="450,370 310,370 380,270" fill="#564c98" opacity="0.3"/>
        <!-- Small shapes -->
        <polygon points="350,470 290,470 320,420" fill="#6258a8" opacity="0.25"/>
        <polygon points="270,550 190,550 230,480" fill="#4e4490" opacity="0.4"/>
        <polygon points="310,430 230,490 150,430 230,370" fill="#3a3268" opacity="0.35"/>
      </svg>

      <!-- GRAYSCALE text -->
      <div class="relative z-10 text-center px-4">
        <h1 class="font-display text-coral font-bold tracking-[0.08em] uppercase"
            style="font-size: clamp(3rem, 10vw, 9rem); letter-spacing: 0.06em;">
          GRAYSCALE<span class="text-coral align-super text-[0.25em] ml-1">&reg;</span>
        </h1>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeroComponent {}
