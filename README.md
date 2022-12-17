# React Redux Chat App:

A React Redux Chat mockup app, where users can:
- Create conversation group:
  - With custom names.
  - Add Users as per choice.
- Modify user lists in existing conversations.
- Post Messages:
  - Images,
  - Text,
- Fuzzy search for conversations with matching user names.
- Hooks, and modern function based syntax. No class syntax used.


Hosted app links:
- Frontend on Netlify: https://react-redux-chat-app-pm.netlify.app/

---

### Video Walkthrough:

[![Video Walkthrough](https://img.youtube.com/vi/YX9t-2fIacc/maxresdefault.jpg)](https://youtu.be/YX9t-2fIacc)

---

### Tech Features:
- React JS frontend code.
- Redux State management.
- Persistent redux on browser refreshes.
- Toast Notifications on important actions.

---

### How to start:
Clone this repo, and have npm installed.
```bash
# navigate to root folder (by default starts on port 3000)
npm start

# visit localhost:3000 in browser to see the app.
```

---

### Folder Structure:
- Frontend related react code is in `/src`
- Directory Structure: Salient files shown below:

```
.
├── README.md                                       # This ReadMe file. ;)
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── BOT                             # BOT messenger files.
    │   ├── BOT_SAMPLE_DATA.js          # - Sample data for BOT
    │   └── BotComponent.js             # - ReactJS cron code
    ├── components
    │   ├── Header.js
    │   ├── Modal.js                    # Reusable modal for New Conversation,
    |   |                               # Modify user list, send images.
    │   ├── mainPanel
    │   │   ├── AddPeople.js            # Add or remove users in existing conversations.
    │   │   ├── AddUserToExistingConversation.js
    │   │   ├── Console.js              # Message typing and sending console.
    │   │   ├── MainPanel.js
    │   │   ├── MessageElement.js
    │   │   ├── MessageWindow.js
    │   │   └── SendImage.js            # Image sending modal controller.
    │   └── sidePanel
    │       ├── CreateConversation.js   # Controller for creating conversations.
    │       ├── SearchUserConversations.js # Fuzzy searches for conversations with
    |       |                              # matching user names.
    │       ├── SidePanel.js            # Conversations list in side panel
    │       └── SidePanelElement.js
    ├── history.js
    ├── index.js
    ├── store                           # Redux related.
    │   ├── ACTION_TYPES.js             # Involved action types.
    │   ├── INITIAL_STATE.js            # Initial state of App.
    │   ├── NOTIFICATION_TYPES.js       # types of messages.
    │   ├── actions
    │   │   └── index.js
    │   ├── reducers
    │   │   ├── conversationReducer.js
    │   │   ├── currentReducer.js
    │   │   ├── index.js                # combines reducers.
    │   │   └── userReducer.js
    │   └── store.js
    └── utils                           # helper functions.
        ├── conversationUtils.js
        └── userUtils.js
```
