import NOTIFICATION_TYPES from './NOTIFICATION_TYPES';

export const SEED_CONVERSATIONS = [
  {
    conversationId: 1,
    conversationName: 'React Redux',
    users: [1, 2, 3, 5],
    messages: [
      {
        message:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 1,
        modifyingUser: 2,
        timestamp: 1667752889000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 2,
        timestamp: 1667752991158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1668840536000,
      },
    ],
  },
  {
    conversationId: 2,
    conversationName: 'Office Club',
    users: [1, 2],
    messages: [
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        message:
          'Quite a a very loong message. Who knows what all I need to type here. i hope it exceeds a line and still is properly formatted in sidepanel.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 3,
        timestamp: 1667752786158,
      },
    ],
  },
  {
    conversationId: 3,
    conversationName: 'Askew',
    users: [1, 2],
    messages: [
      {
        message: 'A long message text goes here',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 3,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 1,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
    ],
  },
  {
    conversationId: 4,
    conversationName: 'Sidesky',
    users: [1, 2],
    messages: [
      {
        message: 'message text',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 3,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 3,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
    ],
  },
  {
    conversationId: 5,
    conversationName: 'React redux',
    users: [1, 2],
    messages: [
      {
        message: 'message text',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 3,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 1,
        modifyingUser: 2,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
    ],
  },
  {
    conversationId: 6,
    conversationName: 'Node js',
    users: [1, 2],
    messages: [
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        message:
          'Quite a very loong message. Who knows what all I need to type here. i hope it exceeds a line and still is properly formatted in sidepanel.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
    ],
  },
  {
    conversationId: 7,
    conversationName: 'Full stack Devs',
    users: [1, 4],
    messages: [
      {
        message: 'A long message text goes here',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 2,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 1,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 4,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
    ],
  },
  {
    conversationId: 8,
    conversationName: 'Scalable',
    users: [2, 4],
    messages: [
      {
        message: 'message text',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 4,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 4,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 1,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
    ],
  },
  {
    conversationId: 9,
    conversationName: 'Microservices',
    users: [1, 2, 3],
    messages: [
      {
        message:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 4,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 4,
        modifyingUser: 4,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
    ],
  },
  {
    conversationId: 10,
    conversationName: 'Design Patterns',
    users: [1, 2],
    messages: [
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 3,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 3,
        modifyingUser: 3,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 1,
        timestamp: 1667752793158,
      },
      {
        message:
          'Quite a a very loong message. Who knows what all I need to type here. i hope it exceeds a line and still is properly formatted in sidepanel.',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 2,
        timestamp: 1667752786158,
      },
    ],
  },
  {
    conversationId: 11,
    conversationName: 'DSA',
    users: [4, 2],
    messages: [
      {
        message: 'A long message text goes here',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 1,
        modifyingUser: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 4,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 4,
        timestamp: 1667752789000,
      },
    ],
  },
  {
    conversationId: 12,
    conversationName: 'Creative Coding',
    users: [4, 2],
    messages: [
      {
        message: 'message text',
        messageType: NOTIFICATION_TYPES.MESSAGE,
        sender: 4,
        timestamp: 1667752786158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_JOIN,
        modifiedUser: 2,
        modifyingUser: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: NOTIFICATION_TYPES.IMAGE,
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        messageType: NOTIFICATION_TYPES.MEMBER_LEAVE,
        modifiedUser: 1,
        modifyingUser: 2,
        timestamp: 1667752791158,
      },
    ],
  },
];

export const SEED_USERS = [
  {
    userId: 1,
    userName: 'Piyush Mishra',
    imgUrl:
      'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  {
    userId: 2,
    userName: 'Ayush Mishra',
    imgUrl:
      'https://images.pexels.com/photos/13920607/pexels-photo-13920607.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  {
    userId: 3,
    userName: 'Yamaha',
    imgUrl:
      'https://images.pexels.com/photos/14036568/pexels-photo-14036568.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  {
    userId: 4,
    userName: 'Katz',
    imgUrl:
      'https://images.pexels.com/photos/3859933/pexels-photo-3859933.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  {
    userId: 5,
    userName: 'Bot-Coder',
    imgUrl:
      'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
];

export const CURRENT_USER_STATE = {
  currentUserId: 1,
  currentConversationId: 1,
  searchUserConversationQuery: '',
  tempCurrentConversation: {},
};
