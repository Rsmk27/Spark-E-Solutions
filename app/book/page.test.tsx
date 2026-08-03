import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookPage from "./page";
import { submitBooking } from "./submitBooking";

jest.mock("./submitBooking", () => ({
  submitBooking: jest.fn(),
}));

describe("BookPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("submits the form successfully", async () => {
    const mockSubmitBooking = submitBooking as jest.Mock;
    mockSubmitBooking.mockResolvedValueOnce(undefined);

    render(<BookPage />);

    // Fill the form
    await userEvent.type(screen.getByLabelText(/Your Name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/Number of Days Required/i), "{backspace}3");
    await userEvent.type(screen.getByLabelText(/Preferred Start Date/i), "2024-01-01");

    // Submit
    fireEvent.click(screen.getByRole("button", { name: /Submit Booking Request/i }));

    // Expect loading state
    expect(screen.getByText(/Submitting.../i)).toBeInTheDocument();

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Booking Submitted!/i)).toBeInTheDocument();
    });

    expect(mockSubmitBooking).toHaveBeenCalledTimes(1);
    expect(mockSubmitBooking).toHaveBeenCalledWith({
      clientName: "John Doe",
      organization: "",
      sessionType: "IoT Basics (DHT, LDR, IR Sensors)",
      numberOfDays: 3,
      startDate: "2024-01-01",
      notes: "",
    });
  });

  it("handles form submission errors", async () => {
    const mockSubmitBooking = submitBooking as jest.Mock;
    mockSubmitBooking.mockRejectedValueOnce(new Error("Failed to submit"));

    render(<BookPage />);

    // Fill the form
    await userEvent.type(screen.getByLabelText(/Your Name/i), "Jane Doe");
    await userEvent.type(screen.getByLabelText(/Number of Days Required/i), "{backspace}2");
    await userEvent.type(screen.getByLabelText(/Preferred Start Date/i), "2024-02-01");

    // Submit
    fireEvent.click(screen.getByRole("button", { name: /Submit Booking Request/i }));

    // Expect loading state
    expect(screen.getByText(/Submitting.../i)).toBeInTheDocument();

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/Failed to submit/i)).toBeInTheDocument();
    });

    // Ensure we are not on the success screen
    expect(screen.queryByText(/Booking Submitted!/i)).not.toBeInTheDocument();

    // Loading should be gone
    expect(screen.getByRole("button", { name: /Submit Booking Request/i })).toBeInTheDocument();

    expect(mockSubmitBooking).toHaveBeenCalledTimes(1);
  });
});
