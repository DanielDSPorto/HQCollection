import { ComicStatusEnum } from "../model/ComicStatusEnum";
import ComicType from "../model/ComicType";
import comicList, { SagasList } from "./comicsList";
import ConsumptionPieChart from "./graphics/ConsumptionPieChart";

export type reducedComicsType = {
    percentage: number;
    status: string;
};

const StatisticsContainer = () => {
    const generateDataArray = (originalList: ComicType[]) => {
        return [
            {
                percentage:
                    originalList.filter(
                        (x) => x.status === ComicStatusEnum["A ser comprado"]
                    ).length / originalList.length,
                status: ComicStatusEnum[0],
            },
            {
                percentage:
                    originalList.filter(
                        (x) => x.status === ComicStatusEnum["Não Lido"]
                    ).length / originalList.length,
                status: ComicStatusEnum[1],
            },
            {
                percentage:
                    originalList.filter(
                        (x) => x.status === ComicStatusEnum.Lido
                    ).length / originalList.length,
                status: ComicStatusEnum[2],
            },
        ];
    };

    return (
        <div className="graphs-wrapper">
            <ConsumptionPieChart
                dataArray={generateDataArray(comicList)}
                title="Graphic Novels"
            />
            ;
            <ConsumptionPieChart
                dataArray={generateDataArray(SagasList)}
                title="Sagas Definitivas"
            />
            ;
        </div>
    );
};

export default StatisticsContainer;
