import { useState, Fragment } from 'react';
import Profile from './Profile';
import './App.css';

function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [love, setLove] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('');
  const [comment, setComment] = useState('');

  const handleFeedback = (type) => {
    setShowForm(true);

    if (type === "like") {
      setLike(like + 1);
      setCurrentEmoji("👍");
    } else if (type === "dislike") {
      setDislike(dislike + 1);
      setCurrentEmoji("👎");
    } else if (type === "love") {
      setLove(love + 1);
      setCurrentEmoji("❤");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setFeedbackList(prev => [...prev, { emoji: currentEmoji, text: comment }]);
      setComment('');
      setShowForm(false);
    }
  };

  return (
    <Fragment>
      <h1>Feedback Tracker</h1>

      <div className="bn-grp">
        <button onClick={() => handleFeedback("like")}>👍 Like</button>
        <button onClick={() => handleFeedback("dislike")}>👎 Dislike</button>
        <button onClick={() => handleFeedback("love")}>❤ Love</button>
        </div>

      <p>Likes: {like} | Dislikes: {dislike} | Loves: {love}</p>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Drop a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      )}

      <Profile feedbackList={feedbackList} />
    </Fragment>
  );
}

export default App;


// import { useState, Fragment } from 'react';
// import Profile from './Profile';
// import './App.css';

// function App() {
//   const [like, setLike] = useState(0);
//   const [dislike, setDislike] = useState(0);
//   const [love, setLove] = useState(0);

//   return (
//     <Fragment>
//       <h1>Feedback Tracker</h1>

//       <button onClick={() => setLike(like + 1)}>👍 Like</button>
//       <button onClick={() => setDislike(dislike + 1)}>👎 Dislike</button>
//       <button onClick={() => setLove(love + 1)}>❤ Love</button>

//       <p>Likes: {like} | Dislikes: {dislike} | Loves: {love}</p>
//       <form>
//         <input
//             type="text"
//             placeholder="Drop a comment..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         <button type="submit">Submit</button>
//       </form>

//       <Profile feedbackList={comments} />

//       <Profile name="Jane Doe" emoji="🌟" />
//     </Fragment>
//   );
// }

// export default App;