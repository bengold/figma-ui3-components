// Icon registry - importing all SVGs as raw strings
import checkIcon from './check.svg?raw';
import chevronDownIcon from './chevron-down.svg?raw';
import chevronDownLargeIcon from './chevron-down-large.svg?raw';
import chevronRightIcon from './chevron-right.svg?raw';
import chevronRightLargeIcon from './chevron-right-large.svg?raw';
import chevronUpIcon from './chevron-up.svg?raw';
import closeIcon from './close.svg?raw';
import moreIcon from './more.svg?raw';
import plusIcon from './plus.svg?raw';
import searchIcon from './search.svg?raw';
import settingsIcon from './settings.svg?raw';

export const icons = {
  'check': checkIcon,
  'chevron-down': chevronDownIcon,
  'chevron-down-large': chevronDownLargeIcon,
  'chevron-right': chevronRightIcon,
  'chevron-right-large': chevronRightLargeIcon,
  'chevron-up': chevronUpIcon,
  'close': closeIcon,
  'more': moreIcon,
  'plus': plusIcon,
  'search': searchIcon,
  'settings': settingsIcon,
} as const;

export type IconName = keyof typeof icons;

// Helper to extract SVG path content
export function extractSvgPath(svgString: string): string {
  const pathMatches = svgString.match(/<path[^>]*\/>/g) || [];
  return pathMatches.join('');
}