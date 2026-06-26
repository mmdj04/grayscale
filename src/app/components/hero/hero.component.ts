import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative w-full h-screen bg-blackberry overflow-hidden flex items-center justify-center">
      <!-- Top-left geometric shapes - adjacent triangles mosaic -->
      <svg
        class="absolute top-0 left-0 w-[420px] h-[420px] md:w-[520px] md:h-[520px]"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Row 1 -->
        <polygon points="0,0 60,0 30,52" fill="#5e54a8"/>
        <polygon points="60,0 120,0 90,52" fill="#3d3570"/>
        <polygon points="120,0 180,0 150,52" fill="#7a6ec0"/>
        <polygon points="180,0 240,0 210,52" fill="#4a4080"/>
        <polygon points="240,0 300,0 270,52" fill="#6258a8"/>
        <polygon points="300,0 360,0 330,52" fill="#3a3268"/>
        <polygon points="360,0 420,0 390,52" fill="#564c98"/>
        <polygon points="420,0 480,0 450,52" fill="#443c78"/>

        <!-- Row 2 -->
        <polygon points="0,0 30,52 0,104" fill="#4e4490"/>
        <polygon points="30,52 60,0 90,52" fill="#7068b8"/>
        <polygon points="90,52 60,0 60,104" fill="#524890"/>
        <polygon points="90,52 120,0 150,52" fill="#443c78"/>
        <polygon points="150,52 120,0 120,104" fill="#3d3570"/>
        <polygon points="150,52 180,0 210,52" fill="#6a60b0"/>
        <polygon points="210,52 180,0 180,104" fill="#5e54a8"/>
        <polygon points="210,52 240,0 270,52" fill="#3a3268"/>
        <polygon points="270,52 240,0 240,104" fill="#7a6ec0"/>
        <polygon points="270,52 300,0 330,52" fill="#4a4080"/>
        <polygon points="330,52 300,0 300,104" fill="#564c98"/>
        <polygon points="330,52 360,0 390,52" fill="#6258a8"/>
        <polygon points="390,52 360,0 360,104" fill="#3d3570"/>
        <polygon points="390,52 420,0 450,52" fill="#7068b8"/>
        <polygon points="450,52 420,0 420,104" fill="#4e4490"/>
        <polygon points="450,52 480,0 510,52" fill="#524890"/>
        <polygon points="510,52 480,0 480,104" fill="#443c78"/>

        <!-- Row 3 -->
        <polygon points="0,104 30,52 60,104" fill="#5e54a8"/>
        <polygon points="60,104 30,52 30,156" fill="#3a3268"/>
        <polygon points="60,104 90,52 120,104" fill="#4e4490"/>
        <polygon points="120,104 90,52 90,156" fill="#6a60b0"/>
        <polygon points="120,104 150,52 180,104" fill="#7a6ec0"/>
        <polygon points="180,104 150,52 150,156" fill="#443c78"/>
        <polygon points="180,104 210,52 240,104" fill="#3d3570"/>
        <polygon points="240,104 210,52 210,156" fill="#564c98"/>
        <polygon points="240,104 270,52 300,104" fill="#7068b8"/>
        <polygon points="300,104 270,52 270,156" fill="#524890"/>
        <polygon points="300,104 330,52 360,104" fill="#3a3268"/>
        <polygon points="360,104 330,52 330,156" fill="#6258a8"/>
        <polygon points="360,104 390,52 420,104" fill="#4e4490"/>
        <polygon points="420,104 390,52 390,156" fill="#3d3570"/>
        <polygon points="420,104 450,52 480,104" fill="#5e54a8"/>
        <polygon points="480,104 450,52 450,156" fill="#7a6ec0"/>
        <polygon points="480,104 510,52 540,104" fill="#443c78"/>

        <!-- Row 4 -->
        <polygon points="0,104 30,156 0,208" fill="#7068b8"/>
        <polygon points="30,156 60,104 90,156" fill="#3d3570"/>
        <polygon points="90,156 60,104 60,208" fill="#5e54a8"/>
        <polygon points="90,156 120,104 150,156" fill="#4e4490"/>
        <polygon points="150,156 120,104 120,208" fill="#3a3268"/>
        <polygon points="150,156 180,104 210,156" fill="#6a60b0"/>
        <polygon points="210,156 180,104 180,208" fill="#7a6ec0"/>
        <polygon points="210,156 240,104 270,156" fill="#524890"/>
        <polygon points="270,156 240,104 240,208" fill="#443c78"/>
        <polygon points="270,156 300,104 330,156" fill="#3d3570"/>
        <polygon points="330,156 300,104 300,208" fill="#7068b8"/>
        <polygon points="330,156 360,104 390,156" fill="#5e54a8"/>
        <polygon points="390,156 360,104 360,208" fill="#6258a8"/>
        <polygon points="390,156 420,104 450,156" fill="#4e4490"/>
        <polygon points="450,156 420,104 420,208" fill="#3a3268"/>
        <polygon points="450,156 480,104 510,156" fill="#564c98"/>
        <polygon points="510,156 480,104 480,208" fill="#3d3570"/>

        <!-- Row 5 -->
        <polygon points="0,208 30,156 60,208" fill="#524890"/>
        <polygon points="60,208 30,156 30,260" fill="#6a60b0"/>
        <polygon points="60,208 90,156 120,208" fill="#3a3268"/>
        <polygon points="120,208 90,156 90,260" fill="#4e4490"/>
        <polygon points="120,208 150,156 180,208" fill="#7a6ec0"/>
        <polygon points="180,208 150,156 150,260" fill="#5e54a8"/>
        <polygon points="180,208 210,156 240,208" fill="#443c78"/>
        <polygon points="240,208 210,156 210,260" fill="#3d3570"/>
        <polygon points="240,208 270,156 300,208" fill="#7068b8"/>
        <polygon points="300,208 270,156 270,260" fill="#524890"/>
        <polygon points="300,208 330,156 360,208" fill="#564c98"/>
        <polygon points="360,208 330,156 330,260" fill="#6258a8"/>
        <polygon points="360,208 390,156 420,208" fill="#3a3268"/>
        <polygon points="420,208 390,156 390,260" fill="#7a6ec0"/>
        <polygon points="420,208 450,156 480,208" fill="#4e4490"/>
        <polygon points="480,208 450,156 450,260" fill="#5e54a8"/>
        <polygon points="480,208 510,156 540,208" fill="#3d3570"/>

        <!-- Row 6 -->
        <polygon points="0,208 30,260 0,312" fill="#443c78"/>
        <polygon points="30,260 60,208 90,260" fill="#7068b8"/>
        <polygon points="90,260 60,208 60,312" fill="#3a3268"/>
        <polygon points="90,260 120,208 150,260" fill="#5e54a8"/>
        <polygon points="150,260 120,208 120,312" fill="#7a6ec0"/>
        <polygon points="150,260 180,208 210,260" fill="#4e4490"/>
        <polygon points="210,260 180,208 180,312" fill="#3d3570"/>
        <polygon points="210,260 240,208 270,260" fill="#524890"/>
        <polygon points="270,260 240,208 240,312" fill="#6a60b0"/>
        <polygon points="270,260 300,208 330,260" fill="#443c78"/>
        <polygon points="330,260 300,208 300,312" fill="#5e54a8"/>
        <polygon points="330,260 360,208 390,260" fill="#3a3268"/>
        <polygon points="390,260 360,208 360,312" fill="#7068b8"/>
        <polygon points="390,260 420,208 450,260" fill="#6258a8"/>
        <polygon points="450,260 420,208 420,312" fill="#4e4490"/>
        <polygon points="450,260 480,208 510,260" fill="#3d3570"/>
        <polygon points="510,260 480,208 480,312" fill="#564c98"/>

        <!-- Row 7 -->
        <polygon points="0,312 30,260 60,312" fill="#5e54a8"/>
        <polygon points="60,312 30,260 30,364" fill="#4e4490"/>
        <polygon points="60,312 90,260 120,312" fill="#3d3570"/>
        <polygon points="120,312 90,260 90,364" fill="#7068b8"/>
        <polygon points="120,312 150,260 180,312" fill="#6a60b0"/>
        <polygon points="180,312 150,260 150,364" fill="#443c78"/>
        <polygon points="180,312 210,260 240,312" fill="#7a6ec0"/>
        <polygon points="240,312 210,260 210,364" fill="#524890"/>
        <polygon points="240,312 270,260 300,312" fill="#3a3268"/>
        <polygon points="300,312 270,260 270,364" fill="#5e54a8"/>
        <polygon points="300,312 330,260 360,312" fill="#4e4490"/>
        <polygon points="360,312 330,260 330,364" fill="#3d3570"/>
        <polygon points="360,312 390,260 420,312" fill="#7068b8"/>
        <polygon points="420,312 390,260 390,364" fill="#564c98"/>
        <polygon points="420,312 450,260 480,312" fill="#6258a8"/>
        <polygon points="480,312 450,260 450,364" fill="#443c78"/>
        <polygon points="480,312 510,260 540,312" fill="#3a3268"/>
      </svg>

      <!-- Bottom-right geometric shapes - adjacent triangles mosaic (mirrored) -->
      <svg
        class="absolute bottom-0 right-0 w-[420px] h-[420px] md:w-[520px] md:h-[520px]"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Row 1 (from bottom) -->
        <polygon points="0,520 60,520 30,468" fill="#5e54a8"/>
        <polygon points="60,520 120,520 90,468" fill="#3d3570"/>
        <polygon points="120,520 180,520 150,468" fill="#7a6ec0"/>
        <polygon points="180,520 240,520 210,468" fill="#4a4080"/>
        <polygon points="240,520 300,520 270,468" fill="#6258a8"/>
        <polygon points="300,520 360,520 330,468" fill="#3a3268"/>
        <polygon points="360,520 420,520 390,468" fill="#564c98"/>
        <polygon points="420,520 480,520 450,468" fill="#443c78"/>

        <!-- Row 2 from bottom -->
        <polygon points="0,520 30,468 0,416" fill="#4e4490"/>
        <polygon points="30,468 60,520 90,468" fill="#7068b8"/>
        <polygon points="90,468 60,520 60,416" fill="#524890"/>
        <polygon points="90,468 120,520 150,468" fill="#443c78"/>
        <polygon points="150,468 120,520 120,416" fill="#3d3570"/>
        <polygon points="150,468 180,520 210,468" fill="#6a60b0"/>
        <polygon points="210,468 180,520 180,416" fill="#5e54a8"/>
        <polygon points="210,468 240,520 270,468" fill="#3a3268"/>
        <polygon points="270,468 240,520 240,416" fill="#7a6ec0"/>
        <polygon points="270,468 300,520 330,468" fill="#4a4080"/>
        <polygon points="330,468 300,520 300,416" fill="#564c98"/>
        <polygon points="330,468 360,520 390,468" fill="#6258a8"/>
        <polygon points="390,468 360,520 360,416" fill="#3d3570"/>
        <polygon points="390,468 420,520 450,468" fill="#7068b8"/>
        <polygon points="450,468 420,520 420,416" fill="#4e4490"/>
        <polygon points="450,468 480,520 510,468" fill="#524890"/>
        <polygon points="510,468 480,520 480,416" fill="#443c78"/>

        <!-- Row 3 from bottom -->
        <polygon points="0,416 30,468 60,416" fill="#5e54a8"/>
        <polygon points="60,416 30,468 30,364" fill="#3a3268"/>
        <polygon points="60,416 90,468 120,416" fill="#4e4490"/>
        <polygon points="120,416 90,468 90,364" fill="#6a60b0"/>
        <polygon points="120,416 150,468 180,416" fill="#7a6ec0"/>
        <polygon points="180,416 150,468 150,364" fill="#443c78"/>
        <polygon points="180,416 210,468 240,416" fill="#3d3570"/>
        <polygon points="240,416 210,468 210,364" fill="#564c98"/>
        <polygon points="240,416 270,468 300,416" fill="#7068b8"/>
        <polygon points="300,416 270,468 270,364" fill="#524890"/>
        <polygon points="300,416 330,468 360,416" fill="#3a3268"/>
        <polygon points="360,416 330,468 330,364" fill="#6258a8"/>
        <polygon points="360,416 390,468 420,416" fill="#4e4490"/>
        <polygon points="420,416 390,468 390,364" fill="#3d3570"/>
        <polygon points="420,416 450,468 480,416" fill="#5e54a8"/>
        <polygon points="480,416 450,468 450,364" fill="#7a6ec0"/>
        <polygon points="480,416 510,468 540,416" fill="#443c78"/>

        <!-- Row 4 from bottom -->
        <polygon points="0,416 30,364 0,312" fill="#7068b8"/>
        <polygon points="30,364 60,416 90,364" fill="#3d3570"/>
        <polygon points="90,364 60,416 60,312" fill="#5e54a8"/>
        <polygon points="90,364 120,416 150,364" fill="#4e4490"/>
        <polygon points="150,364 120,416 120,312" fill="#3a3268"/>
        <polygon points="150,364 180,416 210,364" fill="#6a60b0"/>
        <polygon points="210,364 180,416 180,312" fill="#7a6ec0"/>
        <polygon points="210,364 240,416 270,364" fill="#524890"/>
        <polygon points="270,364 240,416 240,312" fill="#443c78"/>
        <polygon points="270,364 300,416 330,364" fill="#3d3570"/>
        <polygon points="330,364 300,416 300,312" fill="#7068b8"/>
        <polygon points="330,364 360,416 390,364" fill="#5e54a8"/>
        <polygon points="390,364 360,416 360,312" fill="#6258a8"/>
        <polygon points="390,364 420,416 450,364" fill="#4e4490"/>
        <polygon points="450,364 420,416 420,312" fill="#3a3268"/>
        <polygon points="450,364 480,416 510,364" fill="#564c98"/>
        <polygon points="510,364 480,416 480,312" fill="#3d3570"/>

        <!-- Row 5 from bottom -->
        <polygon points="0,312 30,364 60,312" fill="#524890"/>
        <polygon points="60,312 30,364 30,260" fill="#6a60b0"/>
        <polygon points="60,312 90,364 120,312" fill="#3a3268"/>
        <polygon points="120,312 90,364 90,260" fill="#4e4490"/>
        <polygon points="120,312 150,364 180,312" fill="#7a6ec0"/>
        <polygon points="180,312 150,364 150,260" fill="#5e54a8"/>
        <polygon points="180,312 210,364 240,312" fill="#443c78"/>
        <polygon points="240,312 210,364 210,260" fill="#3d3570"/>
        <polygon points="240,312 270,364 300,312" fill="#7068b8"/>
        <polygon points="300,312 270,364 270,260" fill="#524890"/>
        <polygon points="300,312 330,364 360,312" fill="#564c98"/>
        <polygon points="360,312 330,364 330,260" fill="#6258a8"/>
        <polygon points="360,312 390,364 420,312" fill="#3a3268"/>
        <polygon points="420,312 390,364 390,260" fill="#7a6ec0"/>
        <polygon points="420,312 450,364 480,312" fill="#4e4490"/>
        <polygon points="480,312 450,364 450,260" fill="#5e54a8"/>
        <polygon points="480,312 510,364 540,312" fill="#3d3570"/>

        <!-- Row 6 from bottom -->
        <polygon points="0,312 30,260 0,208" fill="#443c78"/>
        <polygon points="30,260 60,312 90,260" fill="#7068b8"/>
        <polygon points="90,260 60,312 60,208" fill="#3a3268"/>
        <polygon points="90,260 120,312 150,260" fill="#5e54a8"/>
        <polygon points="150,260 120,312 120,208" fill="#7a6ec0"/>
        <polygon points="150,260 180,312 210,260" fill="#4e4490"/>
        <polygon points="210,260 180,312 180,208" fill="#3d3570"/>
        <polygon points="210,260 240,312 270,260" fill="#524890"/>
        <polygon points="270,260 240,312 240,208" fill="#6a60b0"/>
        <polygon points="270,260 300,312 330,260" fill="#443c78"/>
        <polygon points="330,260 300,312 300,208" fill="#5e54a8"/>
        <polygon points="330,260 360,312 390,260" fill="#3a3268"/>
        <polygon points="390,260 360,312 360,208" fill="#7068b8"/>
        <polygon points="390,260 420,312 450,260" fill="#6258a8"/>
        <polygon points="450,260 420,312 420,208" fill="#4e4490"/>
        <polygon points="450,260 480,312 510,260" fill="#3d3570"/>
        <polygon points="510,260 480,312 480,208" fill="#564c98"/>

        <!-- Row 7 from bottom -->
        <polygon points="0,208 30,260 60,208" fill="#5e54a8"/>
        <polygon points="60,208 30,260 30,156" fill="#4e4490"/>
        <polygon points="60,208 90,260 120,208" fill="#3d3570"/>
        <polygon points="120,208 90,260 90,156" fill="#7068b8"/>
        <polygon points="120,208 150,260 180,208" fill="#6a60b0"/>
        <polygon points="180,208 150,260 150,156" fill="#443c78"/>
        <polygon points="180,208 210,260 240,208" fill="#7a6ec0"/>
        <polygon points="240,208 210,260 210,156" fill="#524890"/>
        <polygon points="240,208 270,260 300,208" fill="#3a3268"/>
        <polygon points="300,208 270,260 270,156" fill="#5e54a8"/>
        <polygon points="300,208 330,260 360,208" fill="#4e4490"/>
        <polygon points="360,208 330,260 330,156" fill="#3d3570"/>
        <polygon points="360,208 390,260 420,208" fill="#7068b8"/>
        <polygon points="420,208 390,260 390,156" fill="#564c98"/>
        <polygon points="420,208 450,260 480,208" fill="#6258a8"/>
        <polygon points="480,208 450,260 450,156" fill="#443c78"/>
        <polygon points="480,208 510,260 540,208" fill="#3a3268"/>
      </svg>

      <!-- GRAYSCALE text -->
      <div class="relative z-10 text-center px-4">
        <h1 class="font-display text-lavender font-bold tracking-[0.08em] uppercase"
            style="font-size: clamp(3rem, 10vw, 9rem); letter-spacing: 0.06em;">
          GRAYSCALE<span class="text-lavender align-super text-[0.25em] ml-1">&reg;</span>
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
