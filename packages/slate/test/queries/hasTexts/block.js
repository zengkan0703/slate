/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <editor>
    <block>one</block>
  </editor>
)

export const run = editor => {
  const block = editor.children[0]
  return Editor.hasTexts(editor, block)
}

export const output = true