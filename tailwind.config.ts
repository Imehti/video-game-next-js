import type { Config } from 'tailwindcss'
 import daisyui from 'daisyui'
const config: Config = {
 content: [
   './pages/**/*.{js,ts,jsx,tsx,mdx}',
   './components/**/*.{js,ts,jsx,tsx,mdx}',
   './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
   extend: {
     backgroundImage: {
      'home-bg':"url(../public/homeBg.jpg)"
     },
   },
   colors:{
    'blue':'#211A70',
    'white':'#FFFFFF',
    'gray':'#848484',
    'searchIcon':'#484848'
  }
 },
 plugins: [daisyui],
}
export default config