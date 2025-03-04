import React, { useState } from 'react';

function AddTweet({onAddTweet}) {
  const [text, setText] = useState("")

    return (
        <>
          <input placeholder="Add new Tweet..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => {
            setText("");
            onAddTweet(text);
          } }>
             Tweet !!
          </button>
        </>
    )
}

export default AddTweet;