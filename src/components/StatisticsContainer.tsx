import { ComicDictionaryEntry } from "../App";
import { ComicStatusEnum } from "../model/ComicStatusEnum";
import ComicType from "../model/ComicType";
import comicList, { SagasList, NoMansLandList } from "./comicsList";
import ConsumptionPieChart from "./graphics/ConsumptionPieChart";

export type reducedComicsType = string | number;

type StatisticsContainerProps = {
    comicsDictionary : ComicDictionaryEntry[];
};

const StatisticsContainer = ({comicsDictionary} : StatisticsContainerProps) => {
    const generateDataArray = (originalList: ComicType[]) => {
        return [
            ["Group Status", "Total"],
            [
                ComicStatusEnum[0] as string,
                originalList.filter(
                    (x) => x.status === ComicStatusEnum["A Ser Comprado"]
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
            {comicsDictionary.map(entry => <ConsumptionPieChart dataArray={generateDataArray(entry.list)} title={entry.listTitle}/>)}
        </div>
    );
};

export default StatisticsContainer;
