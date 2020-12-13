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
        'orange-darkened': '#b3652b',
        'sedona': '#B2573C',
        'sedona-darkened': '#903c23',
        'yellow': '#F4C06F',
        'yellow-darkened': '#d0963b',
        'link-color': '#707070',
        'clear-background': 'rgba(255, 255, 255, .5)',
        'neutral-background': '#F8EFE5',
        'success': '#0070f3',
        'cyan': '#79FFE1',
        'link-color-darkened': '#4d4e53',
        'text-color': '#4d4e53'
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
        'h1': '2.75rem', // H1 
        'h2': '2.5rem', // H2
        'h3': '1.75rem', // H3
        'h4': '1.5rem', // H4
        'h5': '1.25rem', // H4
        'link': '1.25rem', // nav links
        'paragraph': '1rem', // Paragraph / Body
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      margin: {
        'auto': '0 auto'
      },
      backgroundImage: theme => ({
        'wavy-background': "url('../public/wavy-bg.png')",
      })
    },
  },
}
