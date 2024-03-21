import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";
import { Preview } from "@storybook/react";

export default {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/card' },
    }),
  }
} satisfies Preview;
