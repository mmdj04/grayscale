import { Component } from '@angular/core';

@Component({
  selector: 'app-empower',
  standalone: true,
  template: `
    <section class="py-20 md:py-28 bg-bg-light">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="font-display text-[32px] md:text-[40px] font-bold text-center mb-16">
          Empowering Investors
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (item of items; track item.title) {
            <a [href]="item.href" class="group bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-blackberry/5">
              <div class="w-16 h-16 mx-auto mb-6 bg-blackberry/5 rounded-full flex items-center justify-center group-hover:bg-blackberry/10 transition-colors">
                <svg class="w-7 h-7 text-blackberry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" [attr.d]="item.icon"/>
                </svg>
              </div>
              <h3 class="font-display text-xl font-bold mb-3">{{ item.title }}</h3>
              <p class="text-text-gray text-sm leading-relaxed">{{ item.description }}</p>
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class EmpowerComponent {
  items = [
    {
      title: 'Individual Investors',
      description: 'Direct access to crypto investment products designed for individual portfolio needs.',
      href: '/crypto-products',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      title: 'Financial Advisors',
      description: 'Tools and resources to help advisors incorporate digital assets into client portfolios.',
      href: '/financial-professionals',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      title: 'Institutional Investors',
      description: 'Institutional-grade solutions for funds, endowments, and other large-scale investors.',
      href: '/crypto-products',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
  ];
}
