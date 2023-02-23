// import { lowlight } from 'lowlight/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// lowlight.registerLanguage('javascript', javascript)
import React from 'react'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, ReactNodeViewRenderer, useEditor } from '@tiptap/react'

// load all highlight.js languages
import {lowlight} from 'lowlight'

import CodeBlock from './CodeBlock'
import './styles/mainStyle.scss'

    // lowlight.registerLanguage('html', html)
    // lowlight.registerLanguage('css', css)
    // lowlight.registerLanguage('js', js)
    // lowlight.registerLanguage('ts', ts)


    const MenuBar = ({ editor } : any) => {
        if (!editor) {
        return null
        }
        return (
            <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>
            code block
            </button>
        )
    }

const EditorTipTap = () => {

    const editor = useEditor({  
            extensions: [
                Document,
                Paragraph,
                Text,
                CodeBlockLowlight
                    .extend({
                        addNodeView() {
                            return ReactNodeViewRenderer(CodeBlock)
                        },
                    })
                    .configure({ lowlight }),
            ],
            content: `
                <p>
                That’s a boring paragraph followed by a fenced code block:
                </p>

                <pre>
                <code class="language-javascript">
                // insert your code
                </code>
                </pre>
                <p>
                    Press Command Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
                </p>
            `,
        })

        return (
            <div>
            <MenuBar editor={ editor } />
            <EditorContent editor={ editor } />
            </div>
    )
}

export default EditorTipTap