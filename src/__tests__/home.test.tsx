import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe("PasswordShowTextField", () => {
  it("renders a heading", async () => {
    render(<Home />);

    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
