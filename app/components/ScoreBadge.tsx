interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    const getBadgeStyles = (score: number) => {
        if (score > 70) {
            return {
                background: 'bg-green-100',
                text: 'text-green-700',
                label: 'Strong',
            };
        } else if (score > 49) {
            return {
                background: 'bg-yellow-100',
                text: 'text-yellow-700',
                label: 'Good Start',
            };
        } else {
            return {
                background: 'bg-red-100',
                text: 'text-red-700',
                label: 'Needs Work',
            };
        }
    };

    const { background, text, label } = getBadgeStyles(score);

    return (
        <div
            className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${background} ${text}`}
        >
            <p>{label}</p>
        </div>
    );
};

export default ScoreBadge;
