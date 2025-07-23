export const typography = {
  fonts: {
    whyte: 'Whyte, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    inter: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  
  // Text styles from Figma UI3
  heading: {
    display: {
      fontSize: '48px',
      fontWeight: 450,
      lineHeight: '56px',
      letterSpacing: '-0.03em', // -1.44px at 48px
      fontFamily: 'var(--font-whyte)',
    },
    large: {
      fontSize: '24px',
      fontWeight: 550,
      lineHeight: '32px',
      letterSpacing: '-0.017em', // -0.408px at 24px
      fontFamily: 'var(--font-inter)',
    },
    medium: {
      fontSize: '15px',
      fontWeight: 550,
      lineHeight: '25px',
      letterSpacing: '-0.0037em', // -0.055px at 15px
      fontFamily: 'var(--font-inter)',
    },
    small: {
      fontSize: '13px',
      fontWeight: 550,
      lineHeight: '22px',
      letterSpacing: '-0.0025em', // -0.0325px at 13px
      fontFamily: 'var(--font-inter)',
    },
  },
  
  body: {
    large: {
      fontSize: '13px',
      fontWeight: 450,
      lineHeight: '22px',
      letterSpacing: '-0.0025em', // -0.0325px at 13px
      fontFamily: 'var(--font-inter)',
    },
    largeStrong: {
      fontSize: '13px',
      fontWeight: 550,
      lineHeight: '22px',
      letterSpacing: '-0.0025em',
      fontFamily: 'var(--font-inter)',
    },
    medium: {
      fontSize: '11px',
      fontWeight: 450,
      lineHeight: '16px',
      letterSpacing: '0.005em', // 0.055px at 11px
      fontFamily: 'var(--font-inter)',
    },
    mediumStrong: {
      fontSize: '11px',
      fontWeight: 550,
      lineHeight: '16px',
      letterSpacing: '0.005em',
      fontFamily: 'var(--font-inter)',
    },
    small: {
      fontSize: '9px',
      fontWeight: 450,
      lineHeight: '14px',
      letterSpacing: '0.005em', // 0.045px at 9px
      fontFamily: 'var(--font-inter)',
    },
    smallStrong: {
      fontSize: '9px',
      fontWeight: 550,
      lineHeight: '14px',
      letterSpacing: '0.005em',
      fontFamily: 'var(--font-inter)',
    },
  },
  
  // Color tokens
  colors: {
    text: {
      primary: 'rgba(0, 0, 0, 0.9)', // #000000e5
      secondary: 'rgba(0, 0, 0, 0.5)', // #00000080
      tertiary: 'rgba(0, 0, 0, 0.4)',
    },
  },
} as const;

// Type exports for TypeScript
export type TypographyToken = typeof typography;
export type TextStyle = keyof typeof typography.heading;