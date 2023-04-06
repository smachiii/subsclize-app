/**
 * Do not edit directly
 * Generated on Thu, 06 Apr 2023 16:10:19 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  global: {
    colors: {
      primary: DesignToken;
      secondary: DesignToken;
      text: DesignToken;
      "error-copy": DesignToken;
      base: DesignToken;
      button: DesignToken;
      "button-hover": DesignToken;
    };
    shadow: {
      drop: DesignToken;
    };
    variant: {
      h1: DesignToken;
      h2: DesignToken;
      body: DesignToken;
      label: DesignToken;
      link: DesignToken;
      button: DesignToken;
      amount: DesignToken;
    };
    radius: {
      xs: DesignToken;
      sm: DesignToken;
      md: DesignToken;
    };
    disabled: {
      button: DesignToken;
    };
    spacing: {
      xs: DesignToken;
      sm: DesignToken;
      md: DesignToken;
      lg: DesignToken;
      xl: DesignToken;
    };
  };
  $themes: {};
  $metadata: {
    tokenSetOrder: {};
  };
};
