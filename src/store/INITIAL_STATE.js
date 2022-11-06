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
    ],
  },
];

export const SEED_USERS = [
  {
    userId: 1,
    imgUrl:
      'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  {
    userId: 2,
    imgUrl:
      'https://images.pexels.com/photos/2014423/pexels-photo-2014423.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
  {
    userId: 3,
    imgUrl:
      'https://images.pexels.com/photos/2014424/pexels-photo-2014424.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  },
];
