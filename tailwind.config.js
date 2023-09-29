import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
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
  },
}
export const plugins = []
