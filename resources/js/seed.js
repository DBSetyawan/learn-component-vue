export const seed = [
    {
        id:1,
        name: "todo",
        active:true,
        tasks: [
            {
                id: 1,
                title: 'Learn Node JS',
                edit: false
            },
            {
                id: 2,
                title: 'Learn Loopback',
                edit: false
            }
        ]
    },
    {
        id:2,
        name: "InProgress",
        active:false,
        tasks: [
            {
                id: 1,
                title: 'Learn English',
                edit: false
            },
            {
                id: 2,
                title: 'Learn Loopback',
                edit: false
            }
        ]
    },
    {
        id:3,
        name: "Done",
        active:false,
        tasks: [
            {
                id: 1,
                title: 'Learn React JS',
                edit: false
            },
            {
                id: 2,
                title: 'Learn Graphql',
                edit: false
            }
        ]
    }
];