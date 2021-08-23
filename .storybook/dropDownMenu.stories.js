
import React from "react";
import DropDownMenu from "../components/dropDownMenu";
import { MemoryRouter } from "react-router";

export default {
  title: "Home Page/DropDownMenu",
  component: DropDownMenu,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <DropDownMenu />;

Basic.storyName = "Default";