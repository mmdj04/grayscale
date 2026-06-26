import { Component } from '@angular/core';

@Component({
  selector: 'app-crypto-experts',
  standalone: true,
  template: `
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left: Content -->
          <div>
            <h2 class="font-display text-[32px] md:text-[40px] font-bold leading-tight mb-6">
              We Are Crypto Experts
            </h2>
            <p class="text-text-gray text-lg leading-relaxed mb-8">
              As the crypto market has evolved, Grayscale has grown alongside it, becoming a leading
              partner to investors as they navigate and deploy capital into this growing asset class.
            </p>
            <div class="flex flex-wrap gap-8 mb-10">
              @for (stat of stats; track stat.label) {
                <div>
                  <div class="font-display text-3xl md:text-4xl font-bold text-blackberry">
                    {{ stat.value }}
                  </div>
                  <div class="text-text-gray text-sm mt-1">{{ stat.label }}</div>
                </div>
              }
            </div>
            <a href="/company/about-grayscale" class="inline-flex items-center gap-2 bg-blackberry text-white text-[13px] font-semibold tracking-wider uppercase px-8 py-4 hover:bg-blackberry-dark transition-colors">
              About Grayscale
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <!-- Right: Visual -->
          <div class="relative">
            <div class="bg-bg-light rounded-2xl p-10 relative overflow-hidden">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
                <rect width="400" height="300" fill="#F7F5FB"/>
                <circle cx="200" cy="150" r="80" fill="#2E234B" opacity="0.1"/>
                <circle cx="200" cy="150" r="60" fill="#2E234B" opacity="0.15"/>
                <circle cx="200" cy="150" r="40" fill="#2E234B" opacity="0.2"/>
                <path d="M180 150L195 165L220 140" stroke="#2E234B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="absolute bottom-6 left-6 right-6">
                <div class="bg-white rounded-lg p-4 shadow-sm">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-blackberry/10 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-blackberry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-semibold">Trusted Partner</div>
                      <div class="text-xs text-text-gray">Since 2013</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CryptoExpertsComponent {
  stats = [
    { value: '180+', label: 'Years of Combined Experience' },
    { value: '$50B+', label: 'Assets Under Management' },
    { value: '30+', label: 'Investment Products' },
  ];
}
