export const SEED_CONVERSATIONS = [
  {
    conversationId: 1,
    users: [1, 2, 3],
    messages: [
      {
        message: 'message text',
        messageType: 'text',
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: 'join',
        sender: 1,
        timestamp: 1667752789000,
      },
      {
        messageType: 'leave',
        sender: 2,
        timestamp: 1667752791158,
      },
      {
        messageType: 'img',
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
    ],
  },
  {
    conversationId: 2,
    users: [1, 2],
    messages: [
      {
        messageType: 'join',
        sender: 2,
        timestamp: 1667752789000,
      },
      {
        messageType: 'leave',
        sender: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: 'img',
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        message: 'Quite a message',
        messageType: 'text',
        sender: 3,
        timestamp: 1667752786158,
      },
    ],
  },
  {
    conversationId: 2,
    users: [1, 2],
    messages: [
      {
        message: 'A long message text goes here',
        messageType: 'text',
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: 'leave',
        sender: 1,
        timestamp: 1667752791158,
      },
      {
        messageType: 'img',
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        messageType: 'join',
        sender: 2,
        timestamp: 1667752789000,
      },
    ],
  },
  {
    conversationId: 2,
    users: [1, 2],
    messages: [
      {
        message: 'message text',
        messageType: 'text',
        sender: 1,
        timestamp: 1667752786158,
      },
      {
        messageType: 'join',
        sender: 2,
        timestamp: 1667752789000,
      },
      {
        messageType: 'img',
        imgAltText: 'My profile pic',
        imgUrl:
          'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
        sender: 2,
        timestamp: 1667752793158,
      },
      {
        messageType: 'leave',
        sender: 1,
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
];

export const CURRENT_USER_STATE = {
  currentUserId: 1,
  currentConversationId: 1,
};