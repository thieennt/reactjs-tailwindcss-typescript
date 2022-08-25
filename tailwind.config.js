module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#A73D10',
        'background': '#FEF8F8',
        'slay-background': ' #B7B3B3',
        'background-form': '#EBECED',
        'secondary-color': '#44494D'

      },
      padding: {

      },
      border: {
        '1': '1px'
      },
      backgroundImage: {
        'banner': "url('/src/assets/images/Website/banner.svg')",
      }
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
