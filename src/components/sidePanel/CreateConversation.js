import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal';

function CreateConversation() {
  const state = useSelector((state) => state);
  const history = useHistory();

  function renderModalContent() {
    return <div></div>;
  }

  function renderModalActions() {
    return (
      <div>
        <button className="ui button positive">Create Conversation</button>
        <Link to="/" className="ui button">
          Close
        </Link>
      </div>
    );
  }

  function onCancelClick() {
    history.push('/');
  }

  function renderModalContent() {
    //const users

    return (
      <div className="ui container">
        <div>Coversations with same users:</div>
        <div className="ui middle aligned animated horizontal list">
          <li>conv1Name</li>
          <li>conv2Name</li>
          <li>conv3Name</li>
        </div>
        <div>Existing:</div>
        <div className="ui middle aligned animated horizontal list">
          <li>user1NameExisting</li>
          <li>user2NameExisting</li>
          <li>user3NameExisting</li>
        </div>
        <div>Add:</div>
        <div className="ui middle aligned animated list">
          <li>user1NameOutside</li>
          <li>user2NameOutside</li>
          <li>user3NameOutside</li>
        </div>
      </div>
    );
  }

  // function renderExistingUsersInConversation(usersAlreadyInConversation) {
  //   return usersAlreadyInConversation.map((user) => (
  //     <div className="item" key={user.userId}>
  //       <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
  //       <div className="content">
  //         <div className="header">{user.userName}</div>
  //         <button
  //           className={`ui button negative ${usersAlreadyInConversation.length <= 1 && 'disabled'}`}
  //           onClick={() => dispatchAddRemoveUserInConversation(user.userId, state.current.currentConversationId, false)}
  //         >
  //           -
  //         </button>
  //       </div>
  //     </div>
  //   ));
  // }

  // function renderRestOfTheUsersInContact(usersInContact) {
  //   return usersInContact.map((user) => (
  //     <div className="item" key={user.userId}>
  //       <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
  //       <div className="content">
  //         <div className="header">{user.userName}</div>
  //         <button
  //           className="ui button positive"
  //           onClick={() => dispatchAddRemoveUserInConversation(user.userId, state.current.currentConversationId, true)}
  //         >
  //           +
  //         </button>
  //       </div>
  //     </div>
  //   ));
  // }

  return (
    <div>
      <Modal
        header="Add users to this chat?"
        content={renderModalContent()}
        modalActions={renderModalActions()}
        onCloseModal={onCancelClick}
      />
    </div>
  );
}

export default CreateConversation;

//////

// import React, { useCallback } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// import Modal from '../Modal';
// import ACTION_TYPES from '../../store/ACTION_TYPES';
// import { getUsersInAndOutOfCurrentConversation } from '../../utils/conversationUtils';

// function AddUserToExistingConversation() {
//   const history = useHistory();

//   const state = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const dispatchAddRemoveUserInConversation = useCallback(
//     (userId, currentConversationId, isToAdd) => {
//       dispatch({
//         type: isToAdd ? ACTION_TYPES.CONVERSATION_JOIN : ACTION_TYPES.CONVERSATION_LEAVE,
//         payload: {
//           currentConversationId,
//           userId,
//           messageObject: {
//             messageType: isToAdd ? 'join' : 'leave',
//             sender: userId, //todo: sender and actual user added or removed need to be different.
//             timestamp: Date.now(),
//           },
//         },
//       });
//     },
//     [dispatch]
//   );

//   function onCancelClick() {
//     history.push('/');
//   }
//   function renderModalActions() {
//     return (
//       <div>
//         <Link to="/" className="ui button">
//           Close
//         </Link>
//       </div>
//     );
//   }
// function renderModalContent() {
//   const [usersInCurrentConversation, usersOutOfCurrentConversation] = getUsersInAndOutOfCurrentConversation(
//     state.users,
//     state.current.currentConversationId,
//     state.conversations
//   );

//   return (
//     <div className="ui container">
//       <div>Existing:</div>
//       <div className="ui middle aligned animated horizontal list">
//         {renderExistingUsersInConversation(usersInCurrentConversation)}
//       </div>
//       <div>Add:</div>
//       <div className="ui middle aligned animated list">
//         {renderRestOfTheUsersInContact(usersOutOfCurrentConversation)}
//       </div>
//     </div>
//   );
// }

// function renderExistingUsersInConversation(usersAlreadyInConversation) {
//   return usersAlreadyInConversation.map((user) => (
//     <div className="item" key={user.userId}>
//       <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
//       <div className="content">
//         <div className="header">{user.userName}</div>
//         <button
//           className={`ui button negative ${usersAlreadyInConversation.length <= 1 && 'disabled'}`}
//           onClick={() => dispatchAddRemoveUserInConversation(user.userId, state.current.currentConversationId, false)}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   ));
// }

// function renderRestOfTheUsersInContact(usersInContact) {
//   return usersInContact.map((user) => (
//     <div className="item" key={user.userId}>
//       <img className="ui avatar image" src={user.imgUrl} alt="user profile" />
//       <div className="content">
//         <div className="header">{user.userName}</div>
//         <button
//           className="ui button positive"
//           onClick={() => dispatchAddRemoveUserInConversation(user.userId, state.current.currentConversationId, true)}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   ));
// }
//   return (
//     <Modal
//       header="Add users to this chat?"
//       content={renderModalContent()}
//       modalActions={renderModalActions()}
//       onCloseModal={onCancelClick}
//     />
//   );
// }

// export default AddUserToExistingConversation;
