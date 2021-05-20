export default {
    id: '1',
    users: [{
        id: 'u1',
        firstName: 'Jagoda',
        lastName: 'Ef',
        profilePic: 'https://cdn.blueberriesconsulting.com/2021/01/El-US-Highbush-Blueberry-Council.jpg',
    }, {
        id: 'u2',
        name: 'Homer',
        profilePic: 'https://e-hunter.pl/public/assets//es-zQE0Q.jpeg'
    }],
    messages: [{
        id: 'm1',
        content: 'How are you?',
        createdAt: '2021-05-20T12:48:00.000Z',
        user: {
            id: 'u1',
            name: 'Jagoda',
        },
    }, {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2021-05-20T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Homer',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2021-05-20T14:49:40.000Z',
        user: {
            id: 'u2',
            name: 'Homer',
        },
    }, {
        id: 'm4',
        content: 'I am watching The Simpsons right now',
        createdAt: '2021-05-20T14:50:00.000Z',
        user: {
            id: 'u1',
            name: 'Jagoda',
        },
    }]
}
