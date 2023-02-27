import React, { Fragment, useState } from 'react';
import Editor from 'react-simple-code-editor';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';



const codeSnippets = 
//TODO: change this code
`
//code example -clean and insert your code
import axios from "axios"

  const getUser = () => {
    return axios.get('https://randomuser.me/api')
  }
`
// Define styles for Editor -luego los añadimos como props al editor
const styles:any = {
  root:{
    boxSizing: 'border-box',
    fontFamily: '"Dark Mono", "Fira Code", monospace',
    ...theme.plain
  }
}


const languages: Language[] =[
  "tsx",
  "typescript",
  "javascript",
  "jsx",
  "python",
  'json',
  'markdown',
  'css',
  'sql',
  'git',
  "go"
]

// Higlight Component
const HighlightElement = (code: string) => (
  <Highlight {...defaultProps} theme={theme} code={code} language={languages[0]}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          { tokens.map((line, i) => (
            <div { ...getLineProps({line: line, key: i})}>
                { line.map((token, key) => 
                <span { ...getTokenProps({token, key})}/>
                )}
            </div>
          ))}
        </Fragment>
      )}
  </Highlight>
)




const NewEditor = () => {
  const [code, setCode]= useState(codeSnippets);
  const [languageSelected, setLanguageSelected] = useState(languages[0]);



  const handleLanguageChange = (newLanguage:any) => {
    setLanguageSelected(newLanguage)
  }

  const handleCodeChange = (newCode: string) => {
    setCode(newCode)
  }

  return (
    <div>
      <select>
        <option value=" ">Select Language</option>
        {
          languages.map((language) => (
              <option 
                  onChange={handleLanguageChange}  
                  value={languageSelected} 
                  key={language+1}
                  >
                    {language}
              </option>
          ))
        }
      </select>
      <Editor
          value={code}
          onValueChange={handleCodeChange}
          highlight={HighlightElement}
          padding={10}
          style={styles.root}
      ></Editor>

    </div>
  )
}

export default NewEditor;

