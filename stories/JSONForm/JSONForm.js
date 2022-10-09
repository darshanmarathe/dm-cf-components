import { Component, html, Tag } from "componentforge";

export default class JSONForm extends Component {
  jsonEditor = undefined;
  elementRef = null;
 


 constructor() {
 const _props = {
   schema : {},
   data: {},
   enabled : "true"
 }; 
  super(false,_props);

    this.state = {
      defaultOptions: {
        iconlib: "fontawesome5",
        object_layout: "normal",
        schema: this.props.schema,
        show_errors: "interaction",
        theme: "bootstrap4",

        startval: this.props.data || {},
      },
    };
  
  }

  set Value(val){
    var defaultval = this.state.defaultOptions;
    defaultval.startval = val;
    this.setState({defaultOptions : defaultval})
    this.jsonEditor.setValue(val)
  }
  get Value(){
    return this.jsonEditor.getValue();
  }
 
  setUpEditor() {
    if (this.jsonEditor) {
      this.jsonEditor.destroy();
    }
    console.log('setting up editor' , this.props, this.state.defaultOptions.startval);
    if(this.state.defaultOptions.schema === undefined) return;
    this.elementRef = this.root.querySelector("#jsonform");
    this.elementRef.innerHTML = ''

    this.jsonEditor = new window.JSONEditor(
      this.elementRef,
      this.state.defaultOptions
    );
    this.jsonEditor.on("change", () => {
      if (this.validate()) this.fireEvent("change", "value", this.jsonEditor.getValue());
    //  this.data = this.jsonEditor.getValue();
    });
    this.jsonEditor.on("ready", () => {
      // Now the api methods will be available
      
      if (this.props.enabled !== 'true') {
        this.jsonEditor.disable();
      }
    });
  }

  validate() {
    const errors = this.jsonEditor.validate();

    return errors.length === 0;
  }

  initJsoneditor() {
    // destroy old JSONEditor instance if exists
   
    
    if (window.JSONEditor) {
      this.setUpEditor();
    } else {
      const that = this;
      const inter = setInterval(() => {
        if (window.JSONEditor) {
          that.setUpEditor();
          clearInterval(inter);
        }
      }, 1000);
    }
    // new instance of JSONEditor

    // listen for changes
  };

  ComponentDidReceiedProps(attribute, oldValue, attrValue){
  
    if(attribute === 'schema'){
      var defaultval = this.state.defaultOptions;
      defaultval.schema = attrValue;
      this.setState({defaultOptions : defaultval}, this.initJsoneditor())
      return
    }

    if(attribute === 'data'){
      var defaultval = this.state.defaultOptions;
      defaultval.startval = attrValue;
      this.setState({defaultOptions : defaultval}, this.initJsoneditor())
      return
    }
    this.initJsoneditor(0);

  }
  async ComponentDidMount(){
    await this.loadScript(
      "jsoneditor",
      "https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/jsoneditor.min.js"
      );

  
  }

  ComponentWillUnmount() {
    if (this.jsonEditor) {
      this.jsonEditor.destroy();
    }
  }
 
  Template() {
    return html`<div id="jsonform"><h2>${this.props.title}</h2></div>`;
  }

  Style() {
    return html`
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css" rel="stylesheet" />
  
`;
  }
}
Tag("dm-json-form", JSONForm);
