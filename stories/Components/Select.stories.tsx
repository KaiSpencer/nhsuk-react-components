import React, { MouseEvent } from 'react';
import { Select, Button, Input } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Standard: Story = {
  render: () => (
    <Select id="select-1" label="Label text goes here">
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2" selected>
        NHS.UK frontend option 2
      </Select.Option>
      <Select.Option value="3" disabled>
        NHS.UK frontend option 3
      </Select.Option>
    </Select>
  ),
};

export const SelectWithHintText: Story = {
  render: () => (
    <Select label="Label text goes here" hint="Hint text goes here">
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
      <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
    </Select>
  ),
};

export const SelectWithErrorBoolean: Story = {
  render: function SelectWithErrorBooleanRender() {
    const [error, setError] = React.useState<boolean>(true);
    return (
      <>
        <Select error={error} label="Label text goes here">
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setError(!error);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  },

  name: 'Select With Error (Boolean)',
};

export const SelectWithErrorString: Story = {
  render: function SelectWithErrorStringRender() {
    const [error, setError] = React.useState<string>('Error message goes here');
    return (
      <>
        <Select error={error} label="Label text goes here">
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <Input onChange={(e) => setError(e.currentTarget.value)} value={error} />
      </>
    );
  },

  name: 'Select With Error (String)',
};
