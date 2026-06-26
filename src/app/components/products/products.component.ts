import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <section class="bg-blackberry py-20 lg:py-28">
      <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
        <!-- Title -->
        <div class="flex items-end justify-between mb-12">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Investment Solutions
          </h2>
          <a href="#" class="text-white/70 hover:text-white text-sm font-medium underline underline-offset-4 hidden md:block transition-colors">
            View All
          </a>
        </div>

        <!-- Product Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <a href="#" class="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors block">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-white font-bold text-lg leading-tight">Grayscale Bitcoin<br/>Mini Trust ETF</h3>
                <p class="text-white/50 text-xs mt-2">Market Price as of 06/25/2026</p>
              </div>
              <svg class="w-5 h-5 text-white/40 group-hover:text-white transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="flex items-baseline gap-3">
              <span class="text-white text-2xl font-bold">$42.87</span>
              <span class="text-green-400 text-sm font-medium">+2.34%</span>
            </div>
          </a>

          <!-- Card 2 -->
          <a href="#" class="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors block">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-white font-bold text-lg leading-tight">Grayscale Ethereum<br/>Staking Mini ETF</h3>
                <p class="text-white/50 text-xs mt-2">Market Price as of 06/25/2026</p>
              </div>
              <svg class="w-5 h-5 text-white/40 group-hover:text-white transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="flex items-baseline gap-3">
              <span class="text-white text-2xl font-bold">$28.45</span>
              <span class="text-green-400 text-sm font-medium">+1.87%</span>
            </div>
          </a>

          <!-- Card 3 -->
          <a href="#" class="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors block">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-white font-bold text-lg leading-tight">Grayscale Solana<br/>Staking ETF</h3>
                <p class="text-white/50 text-xs mt-2">Market Price as of 06/25/2026</p>
              </div>
              <svg class="w-5 h-5 text-white/40 group-hover:text-white transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="flex items-baseline gap-3">
              <span class="text-white text-2xl font-bold">$18.92</span>
              <span class="text-red-400 text-sm font-medium">-0.45%</span>
            </div>
          </a>

          <!-- Card 4 -->
          <a href="#" class="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors block">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-white font-bold text-lg leading-tight">Grayscale Chainlink<br/>Trust ETF</h3>
                <p class="text-white/50 text-xs mt-2">Market Price as of 06/25/2026</p>
              </div>
              <svg class="w-5 h-5 text-white/40 group-hover:text-white transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="flex items-baseline gap-3">
              <span class="text-white text-2xl font-bold">$14.23</span>
              <span class="text-green-400 text-sm font-medium">+1.12%</span>
            </div>
          </a>

          <!-- Card 5 -->
          <a href="#" class="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors block">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-white font-bold text-lg leading-tight">Grayscale XRP<br/>Trust ETF</h3>
                <p class="text-white/50 text-xs mt-2">Market Price as of 06/25/2026</p>
              </div>
              <svg class="w-5 h-5 text-white/40 group-hover:text-white transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="flex items-baseline gap-3">
              <span class="text-white text-2xl font-bold">$22.56</span>
              <span class="text-green-400 text-sm font-medium">+3.12%</span>
            </div>
          </a>

          <!-- Card 6 -->
          <a href="#" class="group bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors block">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-white font-bold text-lg leading-tight">Grayscale<br/>Hyperliquid Staking ETF</h3>
                <p class="text-white/50 text-xs mt-2">Market Price as of 06/25/2026</p>
              </div>
              <svg class="w-5 h-5 text-white/40 group-hover:text-white transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
            <div class="flex items-baseline gap-3">
              <span class="text-white text-2xl font-bold">$8.67</span>
              <span class="text-green-400 text-sm font-medium">+5.23%</span>
            </div>
          </a>
        </div>

        <!-- Mobile View All -->
        <div class="mt-8 text-center md:hidden">
          <a href="#" class="text-white/70 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors">
            View All Products
          </a>
        </div>

        <!-- Disclaimer -->
        <p class="text-white/30 text-xs mt-8 leading-relaxed">
          The Grayscale Trusts are not investment companies registered under the Investment Company Act of 1940, and therefore are not subject to the same regulatory requirements as registered investment companies.
        </p>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ProductsComponent {}
