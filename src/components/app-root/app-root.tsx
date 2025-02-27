import { Component, h } from '@stencil/core';

import 'stencil-quill'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
        <main>
          <quill-editor></quill-editor>
        </main>
    );
  }
}
