import React from "react";
import { render, screen } from "@testing-library/react";
import Process from "./Process";

jest.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ initial, whileInView, viewport, transition, children, ...props }: any) => <div {...props}>{children}</div>,
      h2: ({ initial, whileInView, viewport, transition, children, ...props }: any) => <h2 {...props}>{children}</h2>,
      p: ({ initial, whileInView, viewport, transition, children, ...props }: any) => <p {...props}>{children}</p>,
    },
  };
});

describe("Process Component", () => {
  it("renders the heading and description", () => {
    render(<Process />);

    expect(screen.getByText(/HOW WE/i)).toBeInTheDocument();
    expect(screen.getByText("WORK")).toBeInTheDocument();
    expect(
      screen.getByText(/A streamlined, transparent process from your first click to the final prototype./i)
    ).toBeInTheDocument();
  });

  it("renders all the process steps correctly", () => {
    render(<Process />);

    const steps = [
      {
        num: "01",
        title: "Inquiry",
        desc: "Reach out to us for personalized workshop or training requirements."
      },
      {
        num: "02",
        title: "Curriculum",
        desc: "We tailor the training modules based on your skill level and goals."
      },
      {
        num: "03",
        title: "Hands-on Training",
        desc: "Dive deep into hardware and software with live sessions and debugging."
      },
      {
        num: "04",
        title: "Project Launch",
        desc: "Finalize your prototype and get certified with a functional project."
      }
    ];

    steps.forEach((step) => {
      expect(screen.getByText(step.num)).toBeInTheDocument();
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.desc)).toBeInTheDocument();
    });
  });
});
