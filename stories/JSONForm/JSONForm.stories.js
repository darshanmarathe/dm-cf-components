import { JSONForm } from "./JSONForm.js";
import { html } from "lit-html";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "ComponentForge/JSONForm",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

var defaultSchema = {
  title: "Person",
  type: "object",
  required: [
    "name",
    "age",
    "date",
    "favorite_color",
    "gender",
    "location",
    "pets",
  ],
  properties: {
    name: {
      type: "string",
      description: "First and Last name",
      minLength: 4,
      default: "Jeremy Dorn",
    },
    age: {
      type: "integer",
      default: 25,
      minimum: 18,
      maximum: 99,
    },
    favorite_color: {
      type: "string",
      format: "color",
      title: "favorite color",
      default: "#ffa500",
    },
    gender: {
      type: "string",
      enum: ["male", "female", "other"],
    },
    date: {
      type: "string",
      format: "date",
      options: {
        flatpickr: {},
      },
    },
    location: {
      type: "object",
      title: "Location",
      required: ["city", "state", "citystate"],
      properties: {
        city: {
          type: "string",
          default: "San Francisco",
        },
        state: {
          type: "string",
          default: "CA",
        },
        citystate: {
          type: "string",
          description:
            "This is generated automatically from the previous two fields",
          template: "{{city}}, {{state}}",
          watch: {
            city: "location.city",
            state: "location.state",
          },
        },
      },
    },
    pets: {
      type: "array",
      format: "table",
      title: "Pets",
      uniqueItems: true,
      items: {
        type: "object",
        title: "Pet",
        properties: {
          type: {
            type: "string",
            enum: ["cat", "dog", "bird", "reptile", "other"],
            default: "dog",
          },
          name: {
            type: "string",
          },
        },
      },
      default: [
        {
          type: "dog",
          name: "Walter",
        },
      ],
    },
  },
};

export const Default = () => {
  console.warn(
    "for documantion visit https://github.com/json-editor/json-editor"
  );

  setTimeout(() => {
    var form = document.getElementById("form1");
    form.schema = defaultSchema;
  }, 1000);
  return html`<dm-json-form
  title="Basic"
    id="form1"

  ></dm-json-form>`;
};

export const Disabled = () => {
  console.warn(
    "for documantion visit https://github.com/json-editor/json-editor"
  );
  setTimeout(() => {
    var form = document.getElementById("Form2");
form.Value = {
  name: "Darshan Marathe",
  age: 40,
  favorite_color: "#ffa500",
}
    form.enabled ='true'
  }, 5000);
  return html`<dm-json-form
    @change=${(e) => {}}
     .schema=${defaultSchema}
    enabled="false"
    id="Form2"
  ></dm-json-form>`;
};

export const Event = () => {
  return html`
    <p>Check console.warn</p>
    <code id="code"></code>
  <dm-json-form
      @change=${(e) => {
        document.getElementById('code').innerText = JSON.stringify(e.detail , null ,4);
        console.warn(e.target.Value , "value")
      }}
      title="Check console.warn on changes"
      .schema=${defaultSchema}
      
      .data=${
        {
          name:'Shivansh Marathe',
          age: 20,
          favorite_color: "#ffa500",
        }
      }
      id="enent"
    ></dm-json-form>
  
    `;
};
