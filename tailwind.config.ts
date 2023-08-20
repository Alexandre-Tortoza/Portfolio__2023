import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ffffff',
        'background': ' #141414',
        'primary': '#041b11',
        'secondary': '#fabd00',
        'accent': '#ffeb3c',
      },
    },
  },
  plugins: [],
}
export default config