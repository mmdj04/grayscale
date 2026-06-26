import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  template: `
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Tab Headers -->
        <div class="flex flex-wrap gap-0 border-b border-blackberry/10 mb-12">
          @for (tab of tabs; track tab.label; let i = $index) {
            <button
              (click)="activeTab = i"
              [class]="activeTab === i
                ? 'px-6 py-4 text-[13px] font-semibold tracking-wider uppercase border-b-2 border-blackberry text-blackberry transition-all'
                : 'px-6 py-4 text-[13px] font-medium tracking-wider uppercase text-blackberry/40 hover:text-blackberry/70 transition-all'"
            >
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Tab Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (card of tabs[activeTab].cards; track card.title) {
            <a [href]="card.href" class="group block">
              <div class="bg-bg-light rounded-lg p-8 h-full hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 bg-blackberry/10 rounded-lg flex items-center justify-center mb-6">
                  <svg class="w-6 h-6 text-blackberry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" [attr.d]="card.icon"/>
                  </svg>
                </div>
                <h3 class="font-display text-xl font-bold mb-3 group-hover:text-blackberry/80 transition-colors">
                  {{ card.title }}
                </h3>
                <p class="text-text-gray text-sm leading-relaxed">
                  {{ card.description }}
                </p>
                <div class="mt-6 flex items-center gap-2 text-blackberry text-[13px] font-semibold tracking-wider uppercase">
                  Learn More
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class TabsComponent {
  activeTab = 0;

  tabs = [
    {
      label: 'Investment Solutions',
      cards: [
        {
          title: 'ETFs/ETPs',
          description: 'Exchange-traded products provide accessible exposure to digital assets through traditional brokerage accounts.',
          href: '/crypto-products',
          icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        },
        {
          title: 'Publicly Traded Funds',
          description: 'Grayscale publicly-traded funds give you crypto exposure through your brokerage account.',
          href: '/crypto-products',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        },
        {
          title: 'Private Funds',
          description: 'Grayscale private funds allow qualified investors to achieve exposure not available to the public markets.',
          href: '/private-funds',
          icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    },
    {
      label: 'Research',
      cards: [
        {
          title: 'Market Commentary',
          description: 'Weekly insights and analysis on cryptocurrency market trends and developments.',
          href: '/research#marketcommentary',
          icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        },
        {
          title: 'Reports',
          description: 'In-depth research reports on specific digital assets and investment strategies.',
          href: '/research#reports',
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        },
        {
          title: 'Videos & Webinars',
          description: 'Educational content featuring industry experts and thought leaders.',
          href: '/research#videos',
          icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    },
    {
      label: 'Resources',
      cards: [
        {
          title: 'Tax & Regulatory Documents',
          description: 'Access important tax documents and regulatory filings for Grayscale products.',
          href: '/documents',
          icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        },
        {
          title: 'The Grayscale Glossary',
          description: 'Comprehensive guide to crypto and blockchain terminology.',
          href: '/the-grayscale-glossary',
          icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        },
        {
          title: 'FAQs',
          description: 'Frequently asked questions about Grayscale products and services.',
          href: '/faqs',
          icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
      ],
    },
  ];
}
