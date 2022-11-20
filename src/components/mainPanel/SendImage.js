import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import history from '../../history';

import ACTION_TYPES from '../../store/ACTION_TYPES';

import Modal from '../Modal';

function SendImage() {
  const inputElement = useRef(null);
  const currentUserState = useSelector((state) => state.current);
  const dispatch = useDispatch();
  const [isImgUrlValid, setIsImgUrlValid] = useState();
  const [imgUrl, setImgUrl] = useState('');

  // Dispatch, only if valid image:
  const dispatchImgUrl = useCallback(
    (imgUrl) => {
      if (!isImgUrlValid) return;
      dispatch({
        type: ACTION_TYPES.MESSAGE_IMG,
        payload: {
          currentConversationId: currentUserState.currentConversationId,
          messageObject: {
            messageType: 'img',
            imgAltText: 'picture sent by me',
            imgUrl,
            sender: currentUserState.currentUserId,
            timeStamp: Date.now(),
          },
        },
      });
    },
    [dispatch, isImgUrlValid]
  );
  const toastImgUrlWrong = () => toast.error("Image url regex doesn't match!");
  const toastImgError = () => toast.error("Image can't be loaded. Check url.");
  const toastImgUrlCorrect = () => toast.success('Image url regex is ok!');
  const toastImgLoaded = () => toast.success('Image loaded');

  function onConfirmClick() {
    console.log('Clicked confirm');
    dispatchImgUrl(imgUrl);
    history.push('/');
  }

  function onCancelClick() {
    console.log('Clicked cancel');
    history.push('/');
  }

  function renderModalActions() {
    return (
      <div>
        <button className="ui button positive" onClick={onCancelClick}>
          Cancel
        </button>
        <Link to="/" className={`ui ${isImgUrlValid ? '' : 'disabled'} button`} onClick={onConfirmClick}>
          Confirm
        </Link>
      </div>
    );
  }

  function onPreviewImageClick() {
    console.log('will preview image');
    if (isImgUrl(imgUrl)) {
      toastImgUrlCorrect();
      setIsImgUrlValid(true);
    } else {
      toastImgUrlWrong();
      setIsImgUrlValid(false);
    }
  }

  function isImgUrl(url) {
    let urlObject;
    try {
      urlObject = new URL(url);
    } catch (e) {
      setIsImgUrlValid(false);
      return false;
    }
    return /(?:jpe?g|gif|png)$/i.test(urlObject.pathname);
  }

  function renderModalContent() {
    return (
      <div>
        <div>
          {isImgUrlValid && (
            <img
              className="ui centered medium image"
              src={imgUrl}
              onLoad={toastImgLoaded}
              onError={toastImgError}
              alt="preview"
            />
          )}
        </div>
        <div className="ui fluid action input">
          <input
            ref={inputElement}
            type="text"
            placeholder="Paste image link and preview, before sending"
            onChange={(e) => setImgUrl(e.target.value)}
            onBlur={(e) => onPreviewImageClick()}
          />
          <button onClick={() => inputElement.blur()}>Preview</button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <Modal
      header="Send Image Link ?"
      content={renderModalContent()}
      modalActions={renderModalActions()}
      onCloseModal={onCancelClick}
    />
  );
}

export default SendImage;