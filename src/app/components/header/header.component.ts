import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-blackberry border-b border-white/10">
      <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="4" fill="#fff"/>
              <path d="M8 24V8h4l4 8 4-8h4v16h-3.5V13.5L18 21h-4l-2.5-7.5V24H8z" fill="#2E234A"/>
            </svg>
            <span class="text-white font-bold text-sm tracking-wider uppercase hidden sm:block">Grayscale</span>
          </a>

          <!-- Nav -->
          <nav class="hidden lg:flex items-center gap-8">
            <div class="relative group">
              <button class="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                Investment Products
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
            <a href="#" class="text-white/80 hover:text-white text-sm font-medium transition-colors">Research</a>
            <a href="#" class="text-white/80 hover:text-white text-sm font-medium transition-colors">Resources</a>
            <a href="#" class="text-white/80 hover:text-white text-sm font-medium transition-colors">Company</a>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <span class="hidden md:inline text-white/50 text-xs tracking-wide">TAX & REGULATORY DOCUMENTS</span>
            <span class="hidden md:inline text-white/50 text-xs tracking-wide">CONTACT</span>
            <a href="#" class="hidden sm:inline text-white/80 hover:text-white text-xs tracking-wide transition-colors">INVESTOR LOGIN</a>
            <a href="#" class="bg-white text-blackberry px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors">
              Start Investing
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HeaderComponent {}
