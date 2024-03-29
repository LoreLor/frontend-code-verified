import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import './styles/codeBlock.scss'



//Me genero las interfaces para los tipos
interface CodeBlockProps {
    node:{
        attrs: {
            language: string
        }
    },
    updateAttributes: any,
    extension: any
}


const CodeBlock = ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension } : CodeBlockProps) => (
    <NodeViewWrapper className="code-block">
      <select contentEditable={false} defaultValue={defaultLanguage} onChange={event => updateAttributes({ language: event.target.value })}>
        <option value="null">
          auto
        </option>
        <option disabled>
          —
        </option>
        {extension.options.lowlight.listLanguages().map((lang: string) => (
          <option key={lang+1} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <pre>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  )

export default CodeBlock;