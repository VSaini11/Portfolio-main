/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html,.js"],
  theme: {
   
    extend: {
      extend: {
        transformOrigin: {
          'center': 'center',
        },
      },
      fontFamily: {
     
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
      'heading': ['"Merriweather"', ],
      
    }},
  },
  plugins: [

  ]
}
