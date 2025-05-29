import React, { Component, Fragment } from 'react';

class Profile extends Component {
  render() {
    const { feedbackList } = this.props;

    return (
      <Fragment>
        <div className="profile">
          <h2>Feedback From:</h2>
          {feedbackList.length === 0 ? (
            <p>No feedback yet.</p>
          ) : (
            <ul>
              {feedbackList.map((item, index) => (
                <li key={index}>
                  {item.emoji} {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Profile;

// import React, { Component, Fragment } from 'react';

// class Profile extends Component {
//   render() {
//     const { feedbackList } = this.props;

//     return (
//       <Fragment>
//         <div className="profile">
//           <h2>Feedback From:</h2>
//           {feedbackList.length === 0 ? (
//             <p>No feedback yet.</p>
//           ) : (
//             <ul>
//               {feedbackList.map((item, index) => (
//                 <li key={index}>
//                   {item.emoji} {item.text}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default Profile;