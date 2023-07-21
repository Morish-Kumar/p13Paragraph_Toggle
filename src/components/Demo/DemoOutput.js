import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = (props) => {
  console.log("Demo Output")
  return (
    <div>
      <MyParagraph>{props.show ? "This is a paragraph" : ""}</MyParagraph>
    </div>
  )
}

export default React.memo(DemoOutput)

// when we go to the elements tab we click the toogleParagraph button content of the p tag flashes which indicate that we have conditionally render the content inside paragraph tag