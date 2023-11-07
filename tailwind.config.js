/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://s3-alpha-sig.figma.com/img/2b2f/8787/985cabb6920eaaeecfea44bd6b5ef5d8?Expires=1699833600&Signature=mXaRloKxNJ6GBN-Ko3585IyvFpbECohz-OnFHLMHArTqj8D9Xs-K5N6WxDCaswHMxEb3~IApbU13vIOV9K16ZGA9ou-Vsi0rvh1HK~qa4UdMLhU9bJwhEB52TAVo7zhCfKFIdw7jg5SBGzAg0sx5RC1glDx43QiCvO8qDGBt4mgvcWlfpebqoqOypcVmP3tjld6aQnhjJ2tCnY4ISeE49Iq4orljyeRn7jImeRVwnmpDy7p8fBVSAZ-6uVpfZL7m45KIw9LF~LBw2moHQzfq00bMZ9a1vZtVlzzyHC5W0XiBap2vVRIDBkruPLEXqTAMnNKBBIYXNNKFi5-F~S0TBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
        'gradient-radial': 'radial-gradient(111.67% 156.26% at 141.47% 78.12%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
        'second-img': "url('https://s3-alpha-sig.figma.com/img/94b3/3f10/9c95c18933a375fb8c7f5e24ccb04f62?Expires=1700438400&Signature=S3EHiwU4CTMELeeKyIdVFcluxmsLaPersW95XGnis~9sZuoRI0~f1XD6msvfe6s2~X1RIVFRqC0OgKt3hmVctJmPllIJfHj2lOEjdwCJWgMKBtAS5OdZtR-ArgfDaFAvJs-uEfIHHU1FdVeKkvWkslrDajvOAu52y583ssdPTHmwr1loGxpd4Ms31gmDLkQwW6bXB8BStmGVTTVNCoEtkMBGOYhy5k0fiu0HwDiFKQ6BO5-xgtiY4tl75qO07NYEcNiqewoVby2ToFw9wsYWKMQp9eyBeK2jP7wSqxcHW7yO~2rtOkMGGe2fH5TgZPpFQRBS4f2u1yGhNOCpyDAfPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },

  },
  plugins: [],
}