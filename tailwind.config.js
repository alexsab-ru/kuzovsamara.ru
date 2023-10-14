import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;
export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
export const theme = {
  container: {
    center: true,
    padding: '1.25rem',
  },
  colors: {
    ...colors,
    accent: colors.cyan, // в основном используется 400 и 500
  },
  extend: {
    fontFamily: {
      'sans': ['Gilroy', ...defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      '3xl': '0 35px 60px rgba(0, 0, 0, 0.3)',
    }
  },
}
export const plugins = []
