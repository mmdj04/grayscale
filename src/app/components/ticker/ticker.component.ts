import { Component } from '@angular/core';

@Component({
  selector: 'app-ticker',
  standalone: true,
  template: `
    <section class="bg-white py-4 border-b border-gray-100 overflow-hidden">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex items-center gap-8 animate-ticker whitespace-nowrap">
          <span class="text-sm text-gray-500">INVESTMENT SOLUTIONS</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale Bitcoin Mini Trust ETF</span>
          <span class="text-sm text-green-600 font-medium">+2.34%</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale Ethereum Staking Mini ETF</span>
          <span class="text-sm text-green-600 font-medium">+1.87%</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale Solana Staking ETF</span>
          <span class="text-sm text-red-500 font-medium">-0.45%</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale XRP Trust ETF</span>
          <span class="text-sm text-green-600 font-medium">+3.12%</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm text-gray-500">INVESTMENT SOLUTIONS</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale Bitcoin Mini Trust ETF</span>
          <span class="text-sm text-green-600 font-medium">+2.34%</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale Ethereum Staking Mini ETF</span>
          <span class="text-sm text-green-600 font-medium">+1.87%</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale Solana Staking ETF</span>
          <span class="text-sm text-red-500 font-medium">-0.45%</span>
          <span class="text-gray-300">|</span>
          <span class="text-sm font-semibold text-gray-800">Grayscale XRP Trust ETF</span>
          <span class="text-sm text-green-600 font-medium">+3.12%</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-ticker {
      animation: ticker 30s linear infinite;
    }
  `]
})
export class TickerComponent {}
