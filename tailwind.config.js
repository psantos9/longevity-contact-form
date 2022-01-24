const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        longevity: {
          blue: {
            DEFAULT: '#007bff',
            dark: '#0069d9'
          },
          gray: {
            DEFAULT: '#212529'
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
