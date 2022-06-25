import "./App.css";
import HQContainer from "./components/HQContainer";
import React from "react";
import comicList, { SagasList } from "./components/comicsList";
import { ComicStatusEnum } from "./model/ComicStatusEnum";
import ComicType from "./model/ComicType";
import StatisticsContainer from "./components/StatisticsContainer";

type FilterType = {
    toBuy: boolean;
    unread: boolean;
    read: boolean;
};

const filtersDisabledObject: FilterType = {
    toBuy: false,
    unread: false,
    read: false,
};

type comicDictionaryEntry = {
    listTitle: string;
    list: ComicType[];
    assetAddressGenerator: (id: number) => string;
};

const filteredComicList = (comicList: ComicType[], filters: FilterType) => {
    return comicList.filter(
        (x) =>
            (!filters.toBuy ||
                x.status === ComicStatusEnum["A ser comprado"]) &&
            (!filters.unread || x.status === ComicStatusEnum["Não Lido"]) &&
            (!filters.read || x.status === ComicStatusEnum.Lido)
    );
};

const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

function App() {
    const [filters, setFilters] = React.useState<FilterType>(
        filtersDisabledObject
    );
    const [graphsTabEnabled, setGraphsTabEnabled] =
        React.useState<boolean>(false);
    const [selectedList, setSelectedList] = React.useState<number>(0);

    const comicListDictionary: comicDictionaryEntry[] = [
        {
            listTitle: "Graphic Novels",
            list: comicList,
            assetAddressGenerator: (id: number) =>
                `dcgbr${zeroPad(id, 3)}_br_1.webp`,
        },
        {
            listTitle: "Sagas Definitivas",
            list: SagasList,
            assetAddressGenerator: (id: number) =>
                `dcgbr5${zeroPad(id, 2)}_br_1.webp`,
        },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>HQ Collection</h1>
                <div className="button-box">
                    <button
                        className="button-style"
                        onClick={() => {
                            setFilters({
                                ...filtersDisabledObject,
                                toBuy: !filters.toBuy,
                            });
                            setGraphsTabEnabled(false);
                        }}>
                        A ser comprado
                    </button>
                    <button
                        className="button-style"
                        onClick={() => {
                            setFilters({
                                ...filtersDisabledObject,
                                unread: !filters.unread,
                            });
                            setGraphsTabEnabled(false);
                        }}>
                        Não Lido
                    </button>
                    <button
                        className="button-style"
                        onClick={() => {
                            setFilters({
                                ...filtersDisabledObject,
                                read: !filters.read,
                            });
                            setGraphsTabEnabled(false);
                        }}>
                        Lido
                    </button>
                    <select
                        className="select-style"
                        onChange={(evt) => {
                            setSelectedList(Number.parseInt(evt.target.value));
                            setGraphsTabEnabled(false);
                        }}>
                        {comicListDictionary.map((opt, idx) => (
                            <option key={idx} value={idx}>
                                {opt.listTitle}
                            </option>
                        ))}
                    </select>
                    <button
                        className="button-style"
                        onClick={() => setGraphsTabEnabled(!graphsTabEnabled)}>
                        Estatísticas
                    </button>
                </div>
            </header>
            <div className="content">
                {!graphsTabEnabled ? (
                    <HQContainer
                        comicsList={filteredComicList(
                            comicListDictionary[selectedList].list,
                            filters
                        )}
                        assetAddressGenerator={
                            comicListDictionary[selectedList]
                                .assetAddressGenerator
                        }
                    />
                ) : (
                    <StatisticsContainer />
                )}
            </div>
        </div>
    );
}

export default App;
