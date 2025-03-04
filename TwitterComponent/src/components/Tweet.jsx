import '../CSS/Tweet.css'
import React, {useState, useMemo} from 'react';

function Tweet ({tweetId, content, likeCount, createdAt, onEdit}){
   const [isEditing, setIsEdting] = useState(false);

    return(
        <div className="tweet-wrapper">
          <div className='tweet-edit-wrapper'>
             <div className="tweet-content">
              {(isEditing) ? (
                <input
                type="text"
                value={content}
                onChange={(e) => {
                  onEdit({
                    id: tweetId,
                    content: e.target.value,
                    likeCount: likeCount,
                    createdAt: createdAt
                  })
                }}/>
                ): content}
        </div>
        <div className='edit-tweet'>
          <button onClick={() => setIsEdting(!isEditing)}>
            {(isEditing) ? 'Save' : 'Edit'}
          </button>
        </div>
          </div>

        <div className="like-createdAt-wrapper">
            <div className="likes">
                {likeCount} Likes
            </div>
            <div className="created-at">
              <b>Tweeted at</b> {createdAt}
            </div>
        </div>
        </div>
    )
}
export default Tweet;