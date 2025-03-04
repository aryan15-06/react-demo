import '../CSS/TweetList.css';
import Tweet from "./Tweet";
import React, {memo} from 'react';

const MemoisedTweet = memo(Tweet);

function TweetList({tweets,  onEditTweet}){
   return(
    <div>
        <ul className='tweet-list'>
         {
           tweets.map((tweet) => (
            <li className='tweet-like-wrapper' key={tweet.id}>
                <MemoisedTweet
                tweetId={tweet.id}
                content={tweet.content}
                likeCount={tweet.likeCount}
                createdAt={tweet.createdAt.toString()}
                onEdit= {onEditTweet}
                />
            </li>
           ))
         }
        </ul>
    </div>
   )
}

export default TweetList;