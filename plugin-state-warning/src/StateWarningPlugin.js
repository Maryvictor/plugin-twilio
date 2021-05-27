import React from 'react';
import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'StateWarningPlugin';

export default class StateWarningPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    // your code goes here
    flex.NoTasksCanvas
  .Content
  .add(
    <div style={{ color: "red", padding: 20 }} key="warning">
      Você não está disponível para receber tarefas!
    </div>,
    {
      if: props => props.worker.activity.available === false
    });
  }
}