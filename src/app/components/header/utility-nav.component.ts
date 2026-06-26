import { Component } from '@angular/core';

@Component({
  selector: 'app-utility-nav',
  standalone: true,
  template: `
    <div class="bg-blackberry text-white/70 text-xs">
      <div class="max-w-7xl mx-auto px-6 flex justify-end items-center h-10 gap-6">
        @for (link of links; track link.label) {
          @if (link.external) {
            <a [href]="link.href" target="_blank" class="hover:text-white transition-colors tracking-wider uppercase text-[11px]">
              {{ link.label }}
            </a>
          } @else {
            <a [href]="link.href" class="hover:text-white transition-colors tracking-wider uppercase text-[11px]">
              {{ link.label }}
            </a>
          }
        }
      </div>
    </div>
  `
})
export class UtilityNavComponent {
  links = [
    { label: 'Tax & Regulatory Documents', href: '/documents', external: false },
    { label: 'Contact', href: '/contact', external: false },
    { label: 'Investor Login', href: 'https://slate.grayscale.com/', external: true },
  ];
}
