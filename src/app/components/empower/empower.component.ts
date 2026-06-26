import { Component } from '@angular/core';

@Component({
  selector: 'app-empower',
  standalone: true,
  template: `
    <section class="bg-white py-20 lg:py-28">
      <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
        <!-- Title -->
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-blackberry mb-16 tracking-tight">
          Empowering Investors
        </h2>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blackberry rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blackberry mb-4">Individual Investors</h3>
            <p class="text-gray-600 leading-relaxed text-sm">
              Grayscale offers a diverse suite of crypto investment solutions for individual investors, from single asset token exposure to strategically designed multi-asset portfolios.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blackberry rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blackberry mb-4">Institutional Investors</h3>
            <p class="text-gray-600 leading-relaxed text-sm">
              Purpose-built for institutional needs with regulatory-grade solutions, offering institutional investors a trusted gateway to the digital asset economy.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blackberry rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-blackberry mb-4">Financial Professionals</h3>
            <p class="text-gray-600 leading-relaxed text-sm">
              Providing financial advisors and professionals with the tools, research, and support they need to allocate to digital assets on behalf of their clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class EmpowerComponent {}
