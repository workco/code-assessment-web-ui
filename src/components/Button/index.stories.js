import { action } from '@storybook/addon-actions';
import Button from './index';

export default {
  component: Button,
  argTypes: { disabled: { control: 'boolean' } },
};

export const Primary = {
  name: 'Button',
  render: (args) => (
    <Button disabled={args.disabled} onClick={action('on-click')}>
      Add to Bag
    </Button>
  ),
};
