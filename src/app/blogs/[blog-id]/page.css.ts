import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  width: '100dvw',
  height: '100dvh',
  overflowY: 'hidden',
  backgroundColor: 'red',
})
