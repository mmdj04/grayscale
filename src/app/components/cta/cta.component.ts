import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  standalone: true,
  template: `
    <section class="bg-blackberry text-white py-20 md:py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path d="M600 0L1200 200L600 400L0 200L600 0Z" fill="#C5BFE4"/>
        </svg>
      </div>
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 class="font-display text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-6">
          Ready to Invest?
        </h2>
        <p class="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Start your journey into digital asset investing with Grayscale's trusted products.
        </p>
        <a href="/crypto-products/invest" class="inline-block bg-white text-blackberry text-[13px] font-semibold tracking-wider uppercase px-10 py-4 hover:bg-white/90 transition-colors">
          Invest Now
        </a>
      </div>
    </section>
  `
})
export class CtaComponent {}
