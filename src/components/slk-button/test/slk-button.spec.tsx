import { newSpecPage } from '@stencil/core/testing';
import { SlkButton } from '../slk-button';

describe('slk-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlkButton],
      html: `<slk-button></slk-button>`,
    });
    expect(page.root).toEqualHtml(`
      <slk-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </slk-button>
    `);
  });
});
