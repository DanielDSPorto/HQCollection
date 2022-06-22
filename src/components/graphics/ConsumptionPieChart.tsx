import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { reducedComicsType } from "../StatisticsContainer";

const COLORS = ["#fb8500", "#ffb703", "#219ebc"];

const renderColorfulLegendText = (value: string, entry: any) => {
    const { color } = entry;

    return (
        <span style={{ color }}>{`${(parseFloat(value) * 100).toFixed(
            2
        )}%`}</span>
    );
};

type ConsumptionPieChartProps = {
    dataArray: reducedComicsType[];
    title: string;
};

const ConsumptionPieChart = ({
    dataArray,
    title,
}: ConsumptionPieChartProps) => {
    return (
        <div className="pie-chart-container">
            <b>{title}</b>
            <ResponsiveContainer width="90%" height="90%">
                <PieChart width={730} height={450}>
                    <Tooltip formatter={renderColorfulLegendText} />
                    <Legend verticalAlign="top" height={0} />
                    <Pie
                        data={dataArray}
                        dataKey="percentage"
                        nameKey="status"
                        cx="50%"
                        cy="50%"
                        outerRadius={50}>
                        {dataArray.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ConsumptionPieChart;
