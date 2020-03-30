import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      contentMaxWidth: string;
    };
    colors: {
      primary: string;
      placeholder: string;
    };
    fonts: {
      paragraph: string;
      heading: string;
    };
  }
}
