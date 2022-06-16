//import logo from './logo.svg';
import './App.css';
//import UefButton from './components/forms/UefButton';
//import {Components} from '@uef/uef-core-3';
//import {uef-button} from '@uef/uef-core-3/dist/collection/components';
//import { Component } from '@uef/uef-core-3/dist/types/stencil-public-runtime';
//import { Component } from '@uef/uef-core-3/dist/types/stencil-public-runtime';
//import {uef-button} from './components';
//import {Components} from './components';
//import {Button} from '@uef/uef-core-3/dist/collection/components/common/Button';
//import { Uef-Button } from '@uef/uef-core-3/dist/esm';
// const {Button} = Components;
//import { Component } from '@uef/uef-core-3/dist/types/stencil-public-runtime';
//import { UefButton } from '@uef/uef-core-3';
//import { Host } from '@uef/uef-core';
//import { UefButton } from '@webcomponents/custom-elements';
//import { UefButton } from '@uef/uef-core-3/components/forms/uef-button’;
function App() {
    //console.log('Button', Button);
    // console.log('Components', Components);
    // console.log('Components.Button', Components.Button);
    //console.log('UefButton', UefButton)
    // const myButton = Button({})
    // console.log('JSX', JSX);

    return (
    <div className="App">
      <uef-figure caption="Your optional caption goes here"></uef-figure>
      <h1> This is Test React App</h1>
      <uef-button>Button</uef-button>
      <uef-dialog
  open=""
  backdrop=""
  close-button=""
  width="80%"
  accessibility-text="Test Dialog"
>
  <uef-typography variant="heading2" slot="uef-dialog-header">
    [Dialog Title]
  </uef-typography>
  <uef-typography variant="body-m" line-height="1.5" slot="uef-dialog-body">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </uef-typography>
  <uef-button-group slot="uef-dialog-footer" alignment="right" direction="rtl">
    <uef-button fill="solid">[Accept]</uef-button>
    <uef-button fill="outline">[Cancel]</uef-button>
  </uef-button-group>
</uef-dialog>
    </div>
  );
}

export default App;

