import React from 'react'

export default function MyParagraph(props) {
    console.log("MyParagraph Output")
    return (
      <div>
        <p>{props.children}</p>
      </div>
    )
}
