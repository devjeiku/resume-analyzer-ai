interface Suggestion {
    type: 'good' | 'improve';
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    const getBackgroundClass = (score: number) => {
        if (score > 69) return 'from-green-100';
        if (score > 49) return 'from-yellow-100';
        return 'from-red-100';
    };

    const getScoreIcon = (score: number) => {
        if (score > 69) return '/icons/ats-good.svg';
        if (score > 49) return '/icons/ats-warning.svg';
        return '/icons/ats-bad.svg';
    };

    return (
        <div
            className={`w-full rounded-lg bg-gradient-to-b ${getBackgroundClass(
                score
            )} to-white p-6 shadow-md`}
        >
            <div className='flex items-center gap-4 mb-6'>
                <img
                    src={getScoreIcon(score)}
                    alt='ATS Score Icon'
                    className='w-12 h-12'
                />
                <h2 className='text-2xl font-bold'>ATS Score - {score}/100</h2>
            </div>

            <div className='space-y-6'>
                <div>
                    <h3 className='text-lg font-semibold mb-2'>
                        Applicant Tracking System Analysis
                    </h3>
                    <p className='text-gray-600'>
                        This score indicates how well your resume will perform
                        when processed by Applicant Tracking Systems (ATS). A
                        higher score means better chances of getting past
                        automated screening.
                    </p>
                </div>

                <div className='space-y-4'>
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <img
                                src={
                                    suggestion.type === 'good'
                                        ? '/icons/check.svg'
                                        : '/icons/warning.svg'
                                }
                                alt={
                                    suggestion.type === 'good'
                                        ? 'Success'
                                        : 'Warning'
                                }
                                className='w-5 h-5 mt-1'
                            />
                            <p
                                className={
                                    suggestion.type === 'good'
                                        ? 'text-green-700'
                                        : 'text-amber-700'
                                }
                            >
                                {suggestion.tip}
                            </p>
                        </div>
                    ))}
                </div>

                <p className='text-gray-700 italic'>
                    Keep refining your resume based on these suggestions to
                    improve your chances of getting noticed by employers.
                </p>
            </div>
        </div>
    );
};

export default ATS;
