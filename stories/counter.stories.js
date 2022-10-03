import { Counter } from './counter';
import {html} from 'lit-html'
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'ComponentForge/Counter',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
   
  },
};



export const Default = () => {
    return html`<d-counter></d-counter>`
}