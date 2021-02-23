import classNames from 'classnames';
import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'slk-button',
  styleUrl: 'slk-button.scss',
  shadow: true,
})
export class SlkButton {
  /**
   * Used to show feedback to the user.
   * This will determine which icon is shown inside the button.
   */
  @Prop() feedbackState?: 'loading' | 'done' | 'error';
  /**
   * Used to show feedback to the user.
   * This will determine which icon is shown inside the button.
   */
  @Prop() iconPlacement?: 'left' | 'right' = 'left';
  /**
   * How will the button be used?
   */
  @Prop() role: 'primary' | 'secondary' | 'tertiary' | 'ghost' = 'tertiary';

  private getIcon(): SVGElement | HTMLSlotElement {
    let icon = null;
    const iconClassName = `button__icon button__icon--${this.iconPlacement}`;
    switch (this.feedbackState) {
      case 'loading':
        icon = <slk-icon-loading class={iconClassName} />;
        break;
      case 'done':
        icon = <slk-icon-check class={iconClassName} />;
        break;
      case 'error':
        icon = <slk-icon-close class={iconClassName} />;
        break;
      default:
        break;
    }

    return icon || <slot name={`icon-${this.iconPlacement}`} />;
  }

  private getClassName(): string {
    return classNames(`button`, `button--${this.role}`, {
      'button--loading': this.feedbackState === 'loading',
    });
  }
  render() {
    const icon = this.getIcon();
    return (
      <Host>
        <button type="button" class={this.getClassName()}>
          <slot>Button</slot>
          {icon}
        </button>
      </Host>
    );
  }
}
