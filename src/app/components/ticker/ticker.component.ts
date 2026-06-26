import { Component } from '@angular/core';

@Component({
  selector: 'app-ticker',
  standalone: true,
  template: `
    <div class="bg-bg-light py-5 overflow-hidden border-y border-blackberry/10">
      <div class="ticker-wrapper flex whitespace-nowrap">
        @for (i of track(15); track i) {
          <span class="font-display text-[15px] font-medium text-blackberry/80 tracking-wider uppercase mx-8">
            Transform Tomorrow
          </span>
          <span class="text-blackberry/30 mx-2">///</span>
        }
      </div>
    </div>
  `,
  styles: [`
    .ticker-wrapper {
      animation: ticker 30s linear infinite;
    }
    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `]
})
export class TickerComponent {
  track(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
}
