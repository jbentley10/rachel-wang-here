module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    fontFamily: {
      'raleway': ['Raleway'],
      'sophillia': ['Sophillia'],
      'barlow': ['Barlow'],
      'rylan': ['Rylan']
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'purple': '#77435D',
        'orange': '#F09756',
        'sedona': '#B2573C',
        'yellow': '#F4C06F',
        'text-color': '#707070',
        'neutral-background': '#F8EFE5',
        'success': '#0070f3',
        'cyan': '#79FFE1',
        'gray': '#4d4e53'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      margin: {
        'auto': '0 auto'
      }
    },
  },
}
