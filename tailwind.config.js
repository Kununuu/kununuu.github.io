module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#28282B',
        'nav-text': '#EAEAEA', 
        'nav-hover': '#FFFFFF',
        'primary': '#FADADD',
        'secondary': '#333333',
        'hover': '#F8C8CD',
        'text-primary': '#FFFFFF',
      },
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "Times", "serif"],
        sans: [
          "-apple-system", 
          "BlinkMacSystemFont", 
          "'Segoe UI'", 
          "Roboto", 
          "Oxygen", 
          "Ubuntu", 
          "Cantarell", 
          "'Open Sans'", 
          "'Helvetica Neue'", 
          "sans-serif"
        ]
      },
      spacing: {
        'nav-gap': '2rem',
        'nav-link-gap': '2.5rem'
      }
    }
  }
}
