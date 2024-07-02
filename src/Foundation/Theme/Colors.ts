export default {
  brand: {
    /**
     * ProcessBlue: '#0091D2'
     */
    ProcessBlue: '#0091D2',
    /**
     * RoyalBlue: '#1E2886'
     */
    RoyalBlue: '#1E2886',
    /**
     * IndigoBlue: '#003A5D'
     */
    IndigoBlue: '#003A5D',
    /**
     * DigitalBlue
     */
    DigitalBlue: '#0073B2',
    /**
     * LimeGreen: '#BFD400'
     */
    LimeGreen: '#BFD400',
    /**
     * ApricotOrange: '#F7981D'
     */
    ApricotOrange: '#F7981D',
    /**
     * GoldenYellow: '#FDCF00'
     */
    GoldenYellow: '#FDCF00',
    /**
     * Yellow: '#F6D047',
     */
    Yellow: '#F6D047',
    /**
     * YellowDark: '#E9C642',
     */
    YellowDark: '#E9C642',
    /**
     * RubyRed: '#DF164C'
     */
    RubyRed: '#DF164C',

    /**
     * commenting out as shade is already present in greys 800
     * GraphiteGrey: '#333333'
     */
    GraphiteGrey: '#333333',
    /**
     * ArcticWhite: '#FFFFFF'
     */
    ArcticWhite: '#FFFFFF',
    /**
     * Black: '#000000'
     */
    Black: '#000000',
    /**
     * PinkMusic: '#ED3092'
     */
    PinkMusic: '#ED3092',
    /**
     * YellowKidsAndFamily: '#FFC20E'
     */
    YellowKidsAndFamily: '#FFC20E',
    /**
     * RedFood: '#FF4535'
     */
    RedFood: '#FF4535',
    /**
     * StorybookBackground: '#F5FCFF'
     */
    StorybookBackground: '#F5FCFF',
  },
  blues: {
    /**
     * Gradient dark: '#15489D'
     */
    GradientDark: '#15489D',
    /**
     * Splash Background Dark: '#15489D'
     */
    SplashBgDark: '#0F50C3',
    /**
     * Splash Background Light: '#15489D'
     */
    SplashBgLight: '#0078FF',
    /**
     * Night top: '#0C68B5'
     */
    NightTop: '#0C68B5',
    /**
     * Night bottom: '#071275'
     */
    NightBottom: '#071275',
    /**
     * PodcastBannerBackground: '##009BDE'
     */
    PodcastBannerBackground: '#009BDE',
    /**
     * White 20% opacity over Process Blue: '#33A7DB'
     */
    White20ProcessBlue: '#33A7DB',
    /**
     * White 15% opacity over Digital Blue: '#D9EAF3'
     */
    White15DigitalBlue: '#D9EAF3',
  },
  greys: {
    /**
     * Grey shade: '#F9F9F9'
     */
    '20': '#F9F9F9',
    /**
     * Grey shade: '#F7F7F7'
     */
    '30': '#F7F7F7',
    /**
     * Grey shade: '#F2F2F2'
     */
    '50': '#F2F2F2',
    /**
     * Grey shade: '#E6E6E6'
     */
    '100': '#E6E6E6',
    /**
     * Grey shade: '#E5E5E5'
     */
    '110': '#E5E5E5',
    /**
     * Grey shade: '#CCCCCC'
     */
    '200': '#CCCCCC',
    /**
     * Grey shade: '#B3B3B3'
     */
    '300': '#B3B3B3',
    /**
     * Grey shade: '#999999'
     */
    '400': '#999999',
    /**
     * Grey shade: '#808080'
     */
    '500': '#808080',
    /**
     * Grey shade: '#666666'
     */
    '600': '#666666',
    /**
     * Grey shade: '#4D4D4D'
     */
    '700': '#4D4D4D',
    /**
     * Grey shade: '#333333'
     */
    '800': '#333333',
    /**
     * Grey shade: '#1A1A1A'
     */
    '900': '#1A1A1A',
  },
  transparencies: {
    /**
     * Black trasparency:
     * @param {number} number - Percentage of transparency
     * @returns {string} `rgba(0,0,0,${number / 100})`
     */
    black: (number: number) => `rgba(0,0,0,${number / 100})`,
    /**
     * White trasparency:
     * @param {number} number - Percentage of transparency
     * @returns {string} `rgba(255,255,255,${number / 100})`
     */
    white: (number: number) => `rgba(255,255,255,${number / 100})`,
    /**
     * Get Hex Opacity Value:
     * @param {number} number - Percentage of transparency 0-100
     * @returns {string} e.g `FF` (100%) add to end of hex value for opacity
     */
    getHexOpacity: (string: string, number: number) => {
      if (number <= 100 && number > 0) {
        return string + Math.round((number / 100) * 255).toString(16)
      }
      return string + '00'
    },
  },
}
