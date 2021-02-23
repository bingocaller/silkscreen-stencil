import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'slk-icon-loading',
  styleUrl: 'slk-icon-loading.scss',
})
export class SlkIconLoading {
  /**
   * How big should the icon be?
   * Supports numbers (will translate to pixels) and strings, e.g. for
   * relative units.
   */
  @Prop() size?: number | string;
  render() {
    return (
      <svg fill="none" style={this.size ? { width: this.size.toString() } : undefined} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <title>Loading</title>
        <path
          d="M15.4375 8.5625C15.1266 8.5625 14.875 8.31094 14.875 8C14.875 7.07188 14.6938 6.17188 14.3344 5.32344C13.9887 4.50665 13.4884 3.76439 12.8609 3.1375C12.2347 2.50925 11.4923 2.0088 10.675 1.66406C9.82813 1.30625 8.92813 1.125 8 1.125C7.68906 1.125 7.4375 0.873438 7.4375 0.5625C7.4375 0.251563 7.68906 0 8 0C9.07969 0 10.1281 0.210938 11.1141 0.629687C12.0672 1.03125 12.9219 1.60938 13.6563 2.34375C14.3906 3.07812 14.9672 3.93438 15.3703 4.88594C15.7875 5.87188 15.9984 6.92031 15.9984 8C16 8.31094 15.7484 8.5625 15.4375 8.5625Z"
          fill="currentColor"
        />
      </svg>
    );
  }
}
