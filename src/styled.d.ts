import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boardColor: string;
    cardColor: string;
    textColor: string;
    draggingCardColor: string;
    draggingOverColor: string;
    draggingFromThisColor: string;
    transparent: string;
  }
}
