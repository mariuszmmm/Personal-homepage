const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  slateGray: "#6E7E91",
  iron: "#D1D5DA4D",
  iron_2: "#D1D5DA4D",
  iron_3: "#D1D5DA1A",
  // mercury: "#E5E5E5",
  mineShaf: "#252525",
  mineShaf_2: "#363636B8",
  doveGray: "#6E6E6E",
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  anakiwa: "#8CC2FF",
  shipCove: "#6D93BE",
  parsley: "#14462033",

  // :"#363636B8"

  test: "yellow",
};

const common = {
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400, // użyty
    medium: 500,
    semiBold: 600, //użyty
    bold: 700, // użyty
    extraBold: 800,
    heavy: 900, //użyty
  },
  breakpoints: {
    small: 576,
    medium: 768,
    large: 992,
  },
};

export const themeLight = {
  ...common,
  page: {
    color: colorNames.slateGray,
    primaryBackgroundColor: colorNames.whiteLilac,
    secendaryBackgroundColor: colorNames.white,
  },
  mode: {
    switch: {
      color: colorNames.white,
      backgroundColor: colorNames.iron,
    },
  },
  title: {
    color: colorNames.mineShaf,
  },
  button: {
    backgroundColor: colorNames.scienceBlue,
    color: colorNames.white,
    borderColor: colorNames.iron,
    focusShadowColor: colorNames.anakiwa,
    selectedShadowColor: colorNames.parsley,
  },
  line: {
    color: colorNames.iron_2,
  },
  dot: {
    color: colorNames.scienceBlue,
  },
};

export const themeDark = {
  ...common,
  page: {
    color: colorNames.white,
    primaryBackgroundColor: colorNames.mineShaf,
    secendaryBackgroundColor: colorNames.mineShaf_2,
  },
  mode: {
    switch: {
      color: colorNames.mineShaf,
      backgroundColor: colorNames.doveGray,
    },
  },
  button: {
    backgroundColor: colorNames.dodgerBlue,
    color: colorNames.white,
    borderColor: colorNames.iron,
    focusShadowColor: colorNames.shipCove,
    selectedShadowColor: colorNames.parsley,
  },
  line: {
    color: colorNames.iron_3,
  },
  dot: {
    color: colorNames.dodgerBlue,
  },
};
