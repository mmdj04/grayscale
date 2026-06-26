import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-blackberry border-t border-white/10">
      <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
        <!-- Top Row: Logo + Subscribe -->
        <div class="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <!-- Logo -->
          <div>
            <a href="#" class="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="#fff"/>
                <path d="M8 24V8h4l4 8 4-8h4v16h-3.5V13.5L18 21h-4l-2.5-7.5V24H8z" fill="#2E234A"/>
              </svg>
              <span class="text-white font-bold text-lg tracking-wider">GRAYSCALE</span>
            </a>
          </div>

          <!-- Subscribe -->
          <div class="w-full lg:w-auto">
            <p class="text-white/70 text-sm mb-4">Stay on top of the latest crypto news and insights</p>
            <div class="flex">
              <input type="email" placeholder="Email" class="bg-white/10 border border-white/20 text-white px-4 py-2.5 text-sm flex-1 lg:w-64 placeholder-white/40 focus:outline-none focus:border-white/40"/>
              <button class="bg-white text-blackberry px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <!-- Column 1 -->
          <div>
            <h4 class="text-white font-bold text-sm mb-4">Investment Products</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">ETFs/ETPs</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Publicly Traded Funds</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Private Funds</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">All Products</a></li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <h4 class="text-white font-bold text-sm mb-4">Research</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Market Commentary</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Reports</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Videos & Webinars</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Explore All</a></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h4 class="text-white font-bold text-sm mb-4">Resources</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Industry Insights</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Crypto Sectors</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Product Documents & Data</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">The Grayscale Glossary</a></li>
            </ul>
          </div>

          <!-- Column 4 -->
          <div>
            <h4 class="text-white font-bold text-sm mb-4">Company</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Company Overview</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Press</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" class="text-white/50 hover:text-white text-sm transition-colors">The Stack Blog</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Row -->
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white/30 text-xs">
            &copy; 2026 Grayscale. All trademarks, service marks and/or trade names (e.g., G&#8482;, GRAYSCALE&reg;, GRAYSCALE CRYPTO SECTORS&#8482;, and GRAYSCALE INVESTMENTS&reg;) are owned and/or registered by Grayscale.
          </p>
          <div class="flex items-center gap-6">
            <a href="#" class="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" class="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Use</a>
            <a href="#" class="text-white/30 hover:text-white/60 text-xs transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class FooterComponent {}
