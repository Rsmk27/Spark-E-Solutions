import robots from './robots';

describe('robots', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('should return default robots configuration when NEXT_PUBLIC_SITE_URL is not set', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    const result = robots();

    expect(result).toEqual({
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      sitemap: 'https://spark-e-solutions.com/sitemap.xml',
    });
  });

  it('should return robots configuration with custom NEXT_PUBLIC_SITE_URL when set', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://custom-site.com';

    const result = robots();

    expect(result).toEqual({
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'],
      },
      sitemap: 'https://custom-site.com/sitemap.xml',
    });
  });
});
