import StatsCard from "./StatsCard";

const MerchantsAtRisk = ({ currMonth, prevMonth }) => {
    return (
        <StatsCard
            title="Merchants at risk"
            stat={54}
            percentDecimal={(currMonth - prevMonth) / prevMonth}
        />
    );
};

export default MerchantsAtRisk;
