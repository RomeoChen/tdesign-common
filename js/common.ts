export type OptionData = {
  label?: string;
  value?: string | number;
} & { [key: string]: any };

export type TreeOptionData = {
  children?: Array<TreeOptionData>;
} & OptionData;

export type SizeEnum = 'small' | 'medium' | 'large';

export type HorizontalAlignEnum = 'left' | 'center' | 'right';

export type VerticalAlignEnum = 'top' | 'middle' | 'bottom';

export type ClassName = { [className: string]: any } | ClassName[] | string;

export type CSSSelector = string;

export interface Styles {
  [css: string]: string | number;
}