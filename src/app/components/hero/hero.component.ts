import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="bg-blackberry text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32 relative z-10">
        <div class="max-w-3xl">
          <h1 class="font-display text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            Invest in your share<br>of the future
          </h1>
          <p class="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Grayscale is a leading crypto asset manager. We transform disruptive
            technologies of the future into investment opportunities today.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/crypto-products/invest" class="border border-white text-white text-[13px] font-semibold tracking-wider uppercase px-8 py-4 hover:bg-white hover:text-blackberry transition-all">
              How to Invest
            </a>
            <a href="/crypto-products" class="bg-white text-blackberry text-[13px] font-semibold tracking-wider uppercase px-8 py-4 hover:bg-white/90 transition-colors">
              View Products
            </a>
          </div>
        </div>
      </div>
      <!-- Decorative elements -->
      <div class="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path d="M300 0L600 200L300 400L0 200L300 0Z" fill="#C5BFE4" opacity="0.3"/>
          <path d="M400 50L600 150L400 250L200 150L400 50Z" fill="#C5BFE4" opacity="0.2"/>
          <path d="M500 100L600 150L500 200L400 150L500 100Z" fill="#C5BFE4" opacity="0.15"/>
        </svg>
      </div>
    </section>
  `
})
export class HeroComponent {}
