import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'slk-icon-check',
  styleUrl: '_icons.css',
})
export class SlkIconCheck {
  /**
   * How big should the icon be?
   * Supports numbers (will translate to pixels) and strings, e.g. for
   * relative units.
   */
  @Prop() size?: number | string;
  render() {
    return (
      <svg fill="none" style={this.size ? { width: this.size.toString() } : undefined} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <title>Check</title>
        <path
          d="M14.2496 2.96875H13.1575C13.0043 2.96875 12.859 3.03906 12.7653 3.15937L6.32308 11.3203L3.23402 7.40625C3.18729 7.34692 3.12772 7.29895 3.0598 7.26593C2.99187 7.23292 2.91735 7.21572 2.84183 7.21562H1.74964C1.64495 7.21562 1.58714 7.33594 1.6512 7.41719L5.93089 12.8391C6.13089 13.0922 6.51527 13.0922 6.71683 12.8391L14.3481 3.16875C14.4121 3.08906 14.3543 2.96875 14.2496 2.96875Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
