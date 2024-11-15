export interface Moment {
    userId: string;
    profileImage: string;
    momentImage: string;
    mood: WorkoutMood;
    reacts: string[];
    tag: WorkoutTag;
}

export enum WorkoutMood {
    energized,
    focused,
    strong,
    exhausted,
    grateful,
    zen,
    pumped,
    chill,
    proud,
    recovering,
}

export enum WorkoutTag {
    // Workout Types
    LegDay = 'leg-day',
    PushDay = 'push-day',
    PullDay = 'pull-day',
    FullBody = 'full-body',
    Cardio = 'cardio',
    HIIT = 'hiit',
    Yoga = 'yoga',
    Stretching = 'stretching',
    Core = 'core',
    CrossFit = 'crossfit',
}

export const testMoments: Moment[] = [
    {
        userId: 'user1',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.energized,
        reacts: [
            'https://randomuser.me/api/portraits/men/2.jpg',
            'https://randomuser.me/api/portraits/men/3.jpg',
            'https://randomuser.me/api/portraits/men/3.jpg',
            'https://randomuser.me/api/portraits/men/3.jpg',
        ],
        tag: WorkoutTag.Cardio,
    },
    {
        userId: 'user2',
        profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.strong,
        reacts: [
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/4.jpg',
        ],
        tag: WorkoutTag.LegDay,
    },
    {
        userId: 'user3',
        profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.focused,
        reacts: ['https://randomuser.me/api/portraits/women/2.jpg'],
        tag: WorkoutTag.HIIT,
    },
    {
        userId: 'user4',
        profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.exhausted,
        reacts: [
            'https://randomuser.me/api/portraits/men/5.jpg',
            'https://randomuser.me/api/portraits/women/3.jpg',
        ],
        tag: WorkoutTag.CrossFit,
    },
    {
        userId: 'user5',
        profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.pumped,
        reacts: [
            'https://randomuser.me/api/portraits/men/6.jpg',
            'https://randomuser.me/api/portraits/women/4.jpg',
        ],
        tag: WorkoutTag.PushDay,
    },
    {
        userId: 'user6',
        profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.proud,
        reacts: ['https://randomuser.me/api/portraits/men/7.jpg'],
        tag: WorkoutTag.FullBody,
    },
    {
        userId: 'user7',
        profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.grateful,
        reacts: [
            'https://randomuser.me/api/portraits/men/8.jpg',
            'https://randomuser.me/api/portraits/women/5.jpg',
        ],
        tag: WorkoutTag.Yoga,
    },
    {
        userId: 'user8',
        profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.recovering,
        reacts: ['https://randomuser.me/api/portraits/men/9.jpg'],
        tag: WorkoutTag.Stretching,
    },
    {
        userId: 'user9',
        profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.zen,
        reacts: ['https://randomuser.me/api/portraits/women/6.jpg'],
        tag: WorkoutTag.Stretching,
    },
    {
        userId: 'user10',
        profileImage: 'https://randomuser.me/api/portraits/men/6.jpg',
        momentImage: 'https://random.imagecdn.app/500/650',
        mood: WorkoutMood.chill,
        reacts: ['https://randomuser.me/api/portraits/men/10.jpg'],
        tag: WorkoutTag.Yoga,
    },
];
