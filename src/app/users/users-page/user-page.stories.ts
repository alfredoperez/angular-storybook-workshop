
import { Meta, StoryObj } from "@storybook/angular";
import { UsersPageComponent } from "./users-page.component";
import { usersPageMocks } from "./users-page.mocks";
import { setApiMocks } from '../../../../.storybook';

const meta: Meta<UsersPageComponent> = {
  title: "Users/Users Page",
  component: UsersPageComponent,
};

export default meta;
type Story = StoryObj<UsersPageComponent>;

export const Default: Story = {
  decorators: [
    setApiMocks([usersPageMocks.requests.users])
  ],
};
