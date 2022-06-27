import { reducedComicsType } from "../StatisticsContainer";
import { Chart } from "react-google-charts";
import { COLORS } from "../../utils/HQUtils";

type ConsumptionPieChartProps = {
    dataArray: reducedComicsType[][];
    title: string;
};

const ConsumptionPieChart = ({
    dataArray,
    title,
}: ConsumptionPieChartProps) => {
    const dataArrayCopy = [...dataArray];
    dataArrayCopy.shift();
    const keys = Object.keys(dataArrayCopy).map(k => ({ color: COLORS[parseInt(k)]}));
    const options = {
        title: title, slices : {
            ...keys
        }
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
