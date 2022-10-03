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


export const Properties = () => {
  return html`<d-counter count="10"></d-counter>`
}



export const Event = () => {
  return html`<d-counter @change=${(e) => {console.warn(e)}} count="5"></d-counter> <p>Check console.warn</p>`
}