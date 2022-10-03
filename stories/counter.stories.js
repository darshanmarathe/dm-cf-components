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
    return html`<dm-counter></dm-counter>`
}


export const Properties = () => {
  return html`<dm-counter count="10"></dm-counter>`
}



export const Event = () => {
  return html`<dm-counter @change=${(e) => {console.warn(e)}} count="5"></dm-counter> <p>Check console.warn</p>`
}