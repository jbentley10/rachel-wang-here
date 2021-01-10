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
        'purple-darkened': '#441f32',
        'orange': '#F09756',
        'orange-darkened': '#b3652b',
        'sedona': '#B2573C',
        'sedona-darkened': '#903c23',
        'yellow': '#F4C06F',
        'yellow-darkened': '#d0963b',
        'yellow-transparent': 'rgba(244, 192, 111, .5)',
        'yellow-highlight': 'rgba(244, 192, 111, .9)',
        'clear-background': 'rgba(255, 255, 255, .5)',
        'neutral-background': '#F8EFE5',
        'success': '#0070f3',
        'cyan': '#79FFE1',        
        // Text
        'link-color': '#707070',
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
        tight: .9,
      },
      fontSize: {
        'huge': '5rem',
        'h1': '2.75rem', // H1 
        'h2': '2.25rem', // H2
        'h3': '1.75rem', // H3
        'h4': '1.5rem', // H4
        'h5': '1.25rem', // H4
        'link': '1.25rem', // nav links
        'paragraph': '1rem', // Paragraph / Body
        'footer': '1.25rem',
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
        'wavy-background': "url('../public/backgrounds/wavy-bg.png')",
        'blob-background': "url('../public/backgrounds/blob-background.png')",
        'popout-pattern-background': "url('../public/backgrounds/popout-pattern-background.png')",
        'popout-pattern-background-2': "url('../public/backgrounds/popout-pattern-background-2.png')",
        'orange-blob-background': "url('../public/backgrounds/orange-blob-background.png')",
        'tan-blob-background': "url('../public/backgrounds/wavy-tan-side-background.png')",
        'side-blobs-combined': "url('../public/backgrounds/side-blobs-combined.png')",
        'side-blobs-combined--purple': "url('../public/backgrounds/side-blobs-combined--purple.png')",
        'image--0': "url('../public/image-1.png')",
        'image--1': "url('../public/image-2.png')",
        'image--2': "url('../public/image-3.png')",
      })
    },
  },
}
