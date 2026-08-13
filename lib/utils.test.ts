import { cn } from "./utils";

describe("cn utility", () => {
  it("should concatenate basic string classes", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should handle conditional classes via objects", () => {
    expect(cn("class1", { class2: true, class3: false })).toBe("class1 class2");
  });

  it("should handle falsy values", () => {
    expect(cn("class1", null, undefined, false, 0, "", "class2")).toBe("class1 class2");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["class1", "class2"], "class3")).toBe("class1 class2 class3");
  });

  it("should resolve conflicting Tailwind CSS classes", () => {
    // twMerge will override px-2 and py-1 with p-4, and bg-red-500 with bg-blue-500
    expect(cn("px-2 py-1 bg-red-500", "p-4 bg-blue-500")).toBe("p-4 bg-blue-500");

    // twMerge will override text-sm with text-lg, but keep text-center
    expect(cn("text-sm text-center", "text-lg")).toBe("text-center text-lg");
  });

  it("should handle a complex mix of inputs", () => {
    expect(
      cn(
        "text-sm",
        ["font-bold", "px-2"],
        { "bg-red-500": true, "text-red-500": false },
        "p-4"
      )
    ).toBe("text-sm font-bold bg-red-500 p-4");
  });
});
