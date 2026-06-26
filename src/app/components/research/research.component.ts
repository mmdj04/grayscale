import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  standalone: true,
  template: `
    <section class="bg-white py-20 lg:py-28">
      <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
        <!-- Title -->
        <div class="flex items-end justify-between mb-12">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-blackberry tracking-tight">
            Research & Insights
          </h2>
          <a href="#" class="text-blackberry/60 hover:text-blackberry text-sm font-medium underline underline-offset-4 hidden md:block transition-colors">
            View All
          </a>
        </div>

        <!-- Research Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <a href="#" class="group block">
            <div class="aspect-video bg-gray-100 mb-4 overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-blackberry/20 to-blackberry/5 flex items-center justify-center">
                <span class="text-blackberry/30 text-6xl font-bold">G</span>
              </div>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold text-blackberry/50 uppercase tracking-wider">Report</span>
              <span class="text-blackberry/30">|</span>
              <span class="text-xs text-blackberry/50">31 min. read</span>
            </div>
            <h3 class="text-lg font-bold text-blackberry group-hover:underline leading-tight mb-2">
              How to Value Digital Assets with Cash Flows
            </h3>
            <p class="text-sm text-gray-500 line-clamp-2">
              Crypto markets have tumbled since the start of the year. How can investors determine which digital assets offer value at current prices?
            </p>
          </a>

          <!-- Card 2 -->
          <a href="#" class="group block">
            <div class="aspect-video bg-gray-100 mb-4 overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-blackberry/20 to-blackberry/5 flex items-center justify-center">
                <span class="text-blackberry/30 text-6xl font-bold">G</span>
              </div>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold text-blackberry/50 uppercase tracking-wider">Report</span>
              <span class="text-blackberry/30">|</span>
              <span class="text-xs text-blackberry/50">26 min. read</span>
            </div>
            <h3 class="text-lg font-bold text-blackberry group-hover:underline leading-tight mb-2">
              Hyperliquid Breaks the Mold
            </h3>
            <p class="text-sm text-gray-500 line-clamp-2">
              Hyperliquid is the breakout success story of the modern digital assets industry — a decentralized finance platform showing what is possible with blockchain technology.
            </p>
          </a>

          <!-- Card 3 -->
          <a href="#" class="group block">
            <div class="aspect-video bg-gray-100 mb-4 overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-blackberry/20 to-blackberry/5 flex items-center justify-center">
                <span class="text-blackberry/30 text-6xl font-bold">G</span>
              </div>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold text-blackberry/50 uppercase tracking-wider">Report</span>
              <span class="text-blackberry/30">|</span>
              <span class="text-xs text-blackberry/50">32 min. read</span>
            </div>
            <h3 class="text-lg font-bold text-blackberry group-hover:underline leading-tight mb-2">
              2026 Digital Asset Outlook: Dawn of the Institutional Era
            </h3>
            <p class="text-sm text-gray-500 line-clamp-2">
              We expect 2026 to accelerate structural shifts in digital asset investing, which have been underpinned by two major themes: macro demand for alternative stores of value.
            </p>
          </a>
        </div>

        <!-- Mobile View All -->
        <div class="mt-8 text-center md:hidden">
          <a href="#" class="text-blackberry/60 hover:text-blackberry text-sm font-medium underline underline-offset-4 transition-colors">
            View All Research
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ResearchComponent {}
