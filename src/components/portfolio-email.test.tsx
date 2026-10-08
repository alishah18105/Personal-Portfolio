import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Contact, Footer, Hero } from "@/components/portfolio";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("portfolio email links and contact form", () => {
  it("opens Gmail compose addressed to the portfolio owner from every email link", () => {
    const { container } = render(
      <>
        <Hero />
        <Contact />
        <Footer />
      </>,
    );
    const emailLinks = container.querySelectorAll<HTMLAnchorElement>(
      'a[href^="https://mail.google.com/mail/"]',
    );

    expect(emailLinks).toHaveLength(3);
    for (const link of emailLinks) {
      expect(new URL(link.href).searchParams.get("to")).toBe("alishah18105@gmail.com");
      expect(link.target).toBe("_blank");
    }
  });

  it("opens a Gmail draft with the visitor's details and a generated subject", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "I would like to discuss a project." },
    });
    fireEvent.click(screen.getByRole("button", { name: /open email draft/i }));

    expect(open).toHaveBeenCalledOnce();
    const [draftUrl, target, features] = open.mock.calls[0];
    const params = new URL(String(draftUrl)).searchParams;
    expect(target).toBe("_blank");
    expect(features).toBe("noopener,noreferrer");
    expect(params.get("to")).toBe("alishah18105@gmail.com");
    expect(params.get("su")).toBe("Portfolio Contact from Jane Doe");
    expect(params.get("body")).toBe(
      "Name: Jane Doe\n\nEmail: jane@example.com\n\nMessage:\nI would like to discuss a project.",
    );
  });

  it("shows validation errors and does not open Gmail for missing or invalid fields", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: /open email draft/i }));

    expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email address.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your message.")).toBeInTheDocument();
    expect(open).not.toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Jane" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "not-an-email" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello" } });
    fireEvent.click(screen.getByRole("button", { name: /open email draft/i }));

    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(open).not.toHaveBeenCalled();
  });
});
