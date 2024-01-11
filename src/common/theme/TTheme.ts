export type TElevationLevels =
  | "0-dp"
  | "1-dp"
  | "2-dp"
  | "3-dp"
  | "4-dp"
  | "6-dp"
  | "8-dp"
  | "9-dp"
  | "12-dp"
  | "16-dp"
  | "24-dp";

export type TBorderRadii = "smaller" | "small" | "medium" | "large";

type TShadeRange = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type IColorPallet =
  | { blue: TShadeRange }
  | { indigo: TShadeRange }
  | { purple: TShadeRange }
  | { pink: TShadeRange }
  | { red: TShadeRange }
  | { orange: TShadeRange }
  | { yellow: TShadeRange }
  | { green: TShadeRange }
  | { teal: TShadeRange }
  | { cyan: TShadeRange }
  | { gray: TShadeRange };

export type TTextColor =
  | "primary.contrastText"
  | "primary.disabledText"
  | "secondary.contrastText"
  | "secondary.disabledText";

export type TMainBackgroundColor = "background";

export type TContainerBackgroundColor =
  | "primary.light"
  | "primary.main"
  | "primary.dark"
  | "secondary.light"
  | "secondary.main"
  | "secondary.dark"
  | "background"
  | "body"
  | "none";

export type TDarkThemeElevationShades =
  | { "0-dp": "0%" }
  | { "1-dp": "5%" }
  | { "2-dp": "7%" }
  | { "3-dp": "8%" }
  | { "4-dp": "9%" }
  | { "6-dp": "11%" }
  | { "8-dp": "12%" }
  | { "9-dp": "13%" }
  | { "12-dp": "14%" }
  | { "16-dp": "15%" }
  | { "24-dp": "16%" };

export type TResponsiveProperties = "font-size";

export type TResponsiveBreakPoints =
  | "small"
  | "medium"
  | "large"
  | "extraLarge";

export type TResponsiveSizes = "small" | "medium" | "large";
