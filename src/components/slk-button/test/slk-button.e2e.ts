import { newE2EPage } from '@stencil/core/testing';

describe('slk-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<slk-button></slk-button>');

    const element = await page.find('slk-button');
    expect(element).toHaveClass('hydrated');
  });
});
