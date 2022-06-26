import { reducedComicsType } from "../StatisticsContainer";
import { Chart } from "react-google-charts";

const COLORS = ["#fb8500", "#ffb703", "#219ebc"];

type ConsumptionPieChartProps = {
    dataArray: reducedComicsType[][];
    title: string;
};

const ConsumptionPieChart = ({
    dataArray,
    title,
}: ConsumptionPieChartProps) => {
    const options = {
        title: title,
    };
    return (
        <div className="pie-chart-container">
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={dataArray}
                options={options}
            />
        </div>
    );
};

export default ConsumptionPieChart;
