import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'


interface EditorProps {
    language?: any,
    children?: any,
    solution?: any
}


const Editor = ({ language, children, solution }: EditorProps) => {

    const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

    return (
        <Highlight {...defaultProps} code={children} language='typescript'>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}

export default Editor
