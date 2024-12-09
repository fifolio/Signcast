import type { fabric } from 'fabric';

declare global {
  interface Window {
    fabric: typeof fabric;
  }
}
