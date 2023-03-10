import StatsCard from "./StatsCard";

const AttritionRate = ({ currMonth, prevMonth }) => {
    return (
        <StatsCard
            title="Attrition rate"
            stat={`${(currMonth * 100).toFixed(2)}%`}
            percentDecimal={(currMonth - prevMonth) / prevMonth}
        />
    );
};

export default AttritionRate;
