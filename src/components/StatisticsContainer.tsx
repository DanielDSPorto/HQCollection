import { ComicStatusEnum } from "../model/ComicStatusEnum";
import ComicType from "../model/ComicType";
import comicList, { SagasList } from "./comicsList";
import ConsumptionPieChart from "./graphics/ConsumptionPieChart";

export type reducedComicsType = string | number;

const StatisticsContainer = () => {
    const generateDataArray = (originalList: ComicType[]) => {
        return [
            ["Group Status", "Total"],
            [
                ComicStatusEnum[0] as string,
                originalList.filter(
                    (x) => x.status === ComicStatusEnum["A ser comprado"]
                ).length,
            ],
            [
                ComicStatusEnum[1] as string,
                originalList.filter(
                    (x) => x.status === ComicStatusEnum["Não Lido"]
                ).length,
            ],
            [
                ComicStatusEnum[2] as string,
                originalList.filter((x) => x.status === ComicStatusEnum.Lido)
                    .length,
            ],
        ];
    };

    return (
        <div className="graphs-wrapper">
            <ConsumptionPieChart
                dataArray={generateDataArray(comicList)}
                title="Graphic Novels"
            />
            <ConsumptionPieChart
                dataArray={generateDataArray(SagasList)}
                title="Sagas Definitivas"
            />
        </div>
    );
};

export default StatisticsContainer;
