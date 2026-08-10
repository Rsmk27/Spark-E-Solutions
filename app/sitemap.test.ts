import sitemap from "./sitemap";

describe("sitemap", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should return the sitemap with default base URL", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    const result = sitemap();

    expect(result).toEqual([
      {
        url: "https://spark-e-solutions.com",
        lastModified: new Date("2026-05-19"),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: "https://spark-e-solutions.com/book",
        lastModified: new Date("2026-05-19"),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ]);
  });

  it("should return the sitemap with custom base URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://custom-domain.com";

    const result = sitemap();

    expect(result).toEqual([
      {
        url: "https://custom-domain.com",
        lastModified: new Date("2026-05-19"),
        changeFrequency: "weekly",
        priority: 1,
      },
      {
        url: "https://custom-domain.com/book",
        lastModified: new Date("2026-05-19"),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ]);
  });
});
