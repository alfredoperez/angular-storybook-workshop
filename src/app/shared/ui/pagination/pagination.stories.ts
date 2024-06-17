import { Meta, StoryObj } from "@storybook/angular";
import { PaginationComponent } from "@my/shared/ui";
import { userEvent, within, expect } from '@storybook/test';

const meta: Meta<PaginationComponent> = {
  title: "Shared/Components/Pagination",
  component: PaginationComponent,
  tags: ["!autodocs"],
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPage: 10,
  },
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText(/100/i)).toBeInTheDocument();
    await expect(canvas.getByText(/results/i)).toBeInTheDocument();
  },
};

export const WithFewItems: Story = {
  args: {
    totalItems: 25,
    itemsPerPage:5,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(3));

    await expect(canvas.getByText(/11/i)).toBeInTheDocument();
    await expect(canvas.getByText(/15/i)).toBeInTheDocument();
  },
};
