import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import BpmnModelerTemplate from './BpmnModelerTemplate';

Meteor.startup(() => {
  ReactDom.render(<BpmnModelerTemplate/>, document.getElementById('app'));
});