import { App } from './App';
import React from 'react';
import { render } from 'react-dom';

declare const document: HTMLDocument;
render(<App name="Markup-to-Roller Graph" />, document.getElementById('app'));
