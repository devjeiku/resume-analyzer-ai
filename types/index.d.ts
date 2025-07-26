interface Resume {
    id: string;
    companyName: string;
    jobTitle: string;
    imagePath: string;
    resumePath: string;
    feedback: Feedback;
}

type Tip = {
    type: 'good' | 'improve';
    tip: string;
    explanation: string;
};

interface Feedback {
    overallScore: number;
    ATS: {
        score: number;
        tips: {
            type: 'good' | 'improve';
            tip: string;
        }[];
    };
    toneAndStyle: {
        score: number;
        tips: Tip[];
    };
    content: {
        score: number;
        tips: Tip[];
    };
    structure: {
        score: number;
        tips: Tip[];
    };
    skills: {
        score: number;
        tips: Tip[];
    };
}
