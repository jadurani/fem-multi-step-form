import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";

const BREAKPOINTS_INT = {
  xs: {
    width: 320,
    height: 568,
  },
  sm: {
    width: 640,
    height: 360,
  },
  md: {
    width: 768,
    height: 432,
  },
  lg: {
    width: 1024,
    height: 576,
  },
  xl: {
    width: 1280,
    height: 720,
  },
  "2xl": {
    width: 1536,
    height: 864,
  },
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val["width"]}px`,
          height: `${val["height"]}px`,
        },
      },
    ];
  })
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    viewport: { viewports: customViewports },
  },
};

export default preview;
