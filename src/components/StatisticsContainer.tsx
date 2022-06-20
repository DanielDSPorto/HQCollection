import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ComicStatusEnum } from "../model/ComicStatusEnum";
import comicList from "./comicsList";

type reducedComicsType = {
    percentage: number;
    status : string;
};


const COLORS = [
    "#fb8500",
    "#ffb703",
    "#219ebc"
];

const renderColorfulLegendText = (value: string, entry: any) => {
  const { color } = entry;

  return <span style={{ color }}>{`${(parseFloat(value)*100).toFixed(2)}%`}</span>;
};

const StatisticsContainer = () => {

    const dataArray: reducedComicsType[] = 
    [
        {percentage: (comicList.filter
            (x => x.status === ComicStatusEnum["A ser comprado"]).length/comicList.length), 
        status: ComicStatusEnum[0]},
        {percentage: (comicList.filter
            (x => x.status === ComicStatusEnum["Não Lido"]).length/comicList.length), 
        status: ComicStatusEnum[1]},
        {percentage: (comicList.filter
            (x => x.status === ComicStatusEnum.Lido).length/comicList.length), 
        status: ComicStatusEnum[2]},
    ];

    return <div className="pie-chart-container">
    <ResponsiveContainer width="90%" height="90%">
        <PieChart  width={730} height={450}>
            <Tooltip formatter={renderColorfulLegendText}/>
            <Legend verticalAlign="top" height={0} />
            <Pie data={dataArray} dataKey="percentage" nameKey="status" cx="50%" cy="50%" outerRadius={50} > 
        	{dataArray.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)} 
            </Pie>
        </PieChart>
        </ResponsiveContainer>
    </div>
};

export default StatisticsContainer;