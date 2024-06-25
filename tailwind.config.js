module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 4px 0px #00000040',
        'custom-red': '0px 4px 4px 0px #FC1C0040',
      },
      fontFamily: {
        'aktiv-regular': ['AktivGrotesk-Regular', 'sans-serif'],
        'aktiv-medium': ['AktivGrotesk-Medium', 'sans-serif'],
        'aktiv-bold': ['AktivGrotesk-Bold', 'sans-serif'],

      },
      borderColor: {
        'custom-pink': '#FFDFDF',
        'custom-red-2': '#FC1C00',
      },
      colors: {
        'custom-text-color': '#FC1C00',
        'custom-red': '#FC1C00',
        'custom-grey': '#464646', 
        'custom-grey-100':'#F9F9F9',
        'custom-peach-100':' #FFEDED',
        'custom-peach-200':'#F2F2F2',
        'custom-peach-300':'#FFDFDF',
        'custom-gray-100': '#CCC7C7',
        'custom-purple-100':'#6666B3',
        'custom-purple-200':'#DFECFF'
      },
      width: {
        '450px': '450px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '34px',
      },

    },
    
    
  },
  plugins: [],
}
