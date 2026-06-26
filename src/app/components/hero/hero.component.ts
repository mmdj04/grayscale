import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative w-full bg-blackberry overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
      <!-- Top-left geometric shapes -->
      <svg class="absolute top-0 left-0 w-[350px] h-[350px] md:w-[480px] md:h-[480px] opacity-60" viewBox="0 0 480 480" fill="none">
        <polygon points="0,0 60,0 30,52" fill="#5e54a8"/>
        <polygon points="60,0 120,0 90,52" fill="#3d3570"/>
        <polygon points="120,0 180,0 150,52" fill="#7a6ec0"/>
        <polygon points="180,0 240,0 210,52" fill="#4a4080"/>
        <polygon points="240,0 300,0 270,52" fill="#6258a8"/>
        <polygon points="300,0 360,0 330,52" fill="#3a3268"/>
        <polygon points="360,0 420,0 390,52" fill="#564c98"/>
        <polygon points="0,0 30,52 0,104" fill="#4e4490"/>
        <polygon points="30,52 60,0 90,52" fill="#7068b8"/>
        <polygon points="90,52 120,0 150,52" fill="#443c78"/>
        <polygon points="150,52 180,0 210,52" fill="#6a60b0"/>
        <polygon points="210,52 240,0 270,52" fill="#3d3570"/>
        <polygon points="270,52 300,0 330,52" fill="#5e54a8"/>
        <polygon points="330,52 360,0 390,52" fill="#3a3268"/>
        <polygon points="390,52 420,0 450,52" fill="#7a6ec0"/>
        <polygon points="0,104 30,52 60,104" fill="#5e54a8"/>
        <polygon points="60,104 90,52 120,104" fill="#4e4490"/>
        <polygon points="120,104 150,52 180,104" fill="#7a6ec0"/>
        <polygon points="180,104 210,52 240,104" fill="#3d3570"/>
        <polygon points="240,104 270,52 300,104" fill="#7068b8"/>
        <polygon points="300,104 330,52 360,104" fill="#3a3268"/>
        <polygon points="360,104 390,52 420,104" fill="#4e4490"/>
        <polygon points="0,104 30,156 0,208" fill="#7068b8"/>
        <polygon points="30,156 60,104 90,156" fill="#3d3570"/>
        <polygon points="90,156 120,104 150,156" fill="#4e4490"/>
        <polygon points="150,156 180,104 210,156" fill="#6a60b0"/>
        <polygon points="210,156 240,104 270,156" fill="#524890"/>
        <polygon points="270,156 300,104 330,156" fill="#3d3570"/>
        <polygon points="330,156 360,104 390,156" fill="#5e54a8"/>
        <polygon points="390,156 420,104 450,156" fill="#443c78"/>
        <polygon points="0,208 30,156 60,208" fill="#524890"/>
        <polygon points="60,208 90,156 120,208" fill="#3a3268"/>
        <polygon points="120,208 150,156 180,208" fill="#7a6ec0"/>
        <polygon points="180,208 210,156 240,208" fill="#443c78"/>
        <polygon points="240,208 270,156 300,208" fill="#7068b8"/>
        <polygon points="300,208 330,156 360,208" fill="#564c98"/>
        <polygon points="0,208 30,260 0,312" fill="#443c78"/>
        <polygon points="30,260 60,208 90,260" fill="#7068b8"/>
        <polygon points="90,260 120,208 150,260" fill="#5e54a8"/>
        <polygon points="150,260 180,208 210,260" fill="#4e4490"/>
        <polygon points="210,260 240,208 270,260" fill="#524890"/>
        <polygon points="270,260 300,208 330,260" fill="#443c78"/>
        <polygon points="0,312 30,260 60,312" fill="#5e54a8"/>
        <polygon points="60,312 90,260 120,312" fill="#3d3570"/>
        <polygon points="120,312 150,260 180,312" fill="#6a60b0"/>
        <polygon points="180,312 210,260 240,312" fill="#7a6ec0"/>
        <polygon points="240,312 270,260 300,312" fill="#3a3268"/>
      </svg>

      <!-- Bottom-right geometric shapes -->
      <svg class="absolute bottom-0 right-0 w-[350px] h-[350px] md:w-[480px] md:h-[480px] opacity-60" viewBox="0 0 480 480" fill="none">
        <polygon points="0,480 60,480 30,428" fill="#5e54a8"/>
        <polygon points="60,480 120,480 90,428" fill="#3d3570"/>
        <polygon points="120,480 180,480 150,428" fill="#7a6ec0"/>
        <polygon points="180,480 240,480 210,428" fill="#4a4080"/>
        <polygon points="240,480 300,480 270,428" fill="#6258a8"/>
        <polygon points="300,480 360,480 330,428" fill="#3a3268"/>
        <polygon points="360,480 420,480 390,428" fill="#564c98"/>
        <polygon points="0,480 30,428 0,376" fill="#4e4490"/>
        <polygon points="30,428 60,480 90,428" fill="#7068b8"/>
        <polygon points="90,428 120,480 150,428" fill="#443c78"/>
        <polygon points="150,428 180,480 210,428" fill="#6a60b0"/>
        <polygon points="210,428 240,480 270,428" fill="#3d3570"/>
        <polygon points="270,428 300,480 330,428" fill="#5e54a8"/>
        <polygon points="330,428 360,480 390,428" fill="#3a3268"/>
        <polygon points="390,428 420,480 450,428" fill="#7a6ec0"/>
        <polygon points="0,376 30,428 60,376" fill="#5e54a8"/>
        <polygon points="60,376 90,428 120,376" fill="#4e4490"/>
        <polygon points="120,376 150,428 180,376" fill="#7a6ec0"/>
        <polygon points="180,376 210,428 240,376" fill="#3d3570"/>
        <polygon points="240,376 270,428 300,376" fill="#7068b8"/>
        <polygon points="300,376 330,428 360,376" fill="#3a3268"/>
        <polygon points="360,376 390,428 420,376" fill="#4e4490"/>
        <polygon points="0,376 30,324 0,272" fill="#7068b8"/>
        <polygon points="30,324 60,376 90,324" fill="#3d3570"/>
        <polygon points="90,324 120,376 150,324" fill="#4e4490"/>
        <polygon points="150,324 180,376 210,324" fill="#6a60b0"/>
        <polygon points="210,324 240,376 270,324" fill="#524890"/>
        <polygon points="270,324 300,376 330,324" fill="#3d3570"/>
        <polygon points="330,324 360,376 390,324" fill="#5e54a8"/>
        <polygon points="390,324 420,376 450,324" fill="#443c78"/>
        <polygon points="0,272 30,324 60,272" fill="#524890"/>
        <polygon points="60,272 90,324 120,272" fill="#3a3268"/>
        <polygon points="120,272 150,324 180,272" fill="#7a6ec0"/>
        <polygon points="180,272 210,324 240,272" fill="#443c78"/>
        <polygon points="240,272 270,324 300,272" fill="#7068b8"/>
        <polygon points="300,272 330,324 360,272" fill="#564c98"/>
        <polygon points="0,272 30,220 0,168" fill="#443c78"/>
        <polygon points="30,220 60,272 90,220" fill="#7068b8"/>
        <polygon points="90,220 120,272 150,220" fill="#5e54a8"/>
        <polygon points="150,220 180,272 210,220" fill="#4e4490"/>
        <polygon points="210,220 240,272 270,220" fill="#524890"/>
        <polygon points="270,220 300,272 330,220" fill="#443c78"/>
        <polygon points="0,168 30,220 60,168" fill="#5e54a8"/>
        <polygon points="60,168 90,220 120,168" fill="#3d3570"/>
        <polygon points="120,168 150,220 180,168" fill="#6a60b0"/>
        <polygon points="180,168 210,220 240,168" fill="#7a6ec0"/>
        <polygon points="240,168 270,220 300,168" fill="#3a3268"/>
      </svg>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10">
        <div class="flex flex-col items-center text-center gap-8">
          <!-- Tagline -->
          <p class="text-white/60 text-sm md:text-base tracking-widest uppercase font-medium">
            The Largest Digital Asset-Focused Investment Platform
          </p>

          <!-- Main Title -->
          <h1 class="text-white font-bold leading-[0.9] tracking-tight" style="font-size: clamp(3rem, 8vw, 7.5rem);">
            GRAYSCALE<span class="align-super text-[0.2em] ml-1">&reg;</span>
          </h1>

          <!-- Subtitle -->
          <p class="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Providing access to the digital asset ecosystem for investors since 2013.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#" class="bg-white text-blackberry px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors text-center">
              Start Investing
            </a>
            <a href="#" class="border border-white/30 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors text-center">
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HeroComponent {}
