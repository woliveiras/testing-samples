import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Profile from "./index";

describe("loads and displays greeting", () => {
  it("Should render the Profile component without the details", () => {
    render(
      <Profile
        userName={"William Oliveira"}
        title={"Frontend Software Engineer"}
        details={"I need to learn English"}
      />
    );

    expect(screen.getByRole("heading")).toHaveTextContent("William Oliveira");
    expect(screen.getByText("Frontend Software Engineer")).toBeInTheDocument();
    expect(
      screen.queryByText("I need to learn English")
    ).not.toBeInTheDocument();
  });

  it("Should render the details text when click on show details button", async () => {
    render(
      <Profile
        userName={"William Oliveira"}
        title={"Frontend Software Engineer"}
        details={"I need to learn English"}
      />
    );

    await userEvent.click(screen.getByRole("button", { name: "Show Details" }));

    expect(screen.getByRole("heading")).toHaveTextContent("William Oliveira");
    expect(screen.getByText("Frontend Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("I need to learn English")).toBeInTheDocument();
  });
});
