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

const filteredComicList = (comicList: ComicType[], filters: FilterType) => {
    return comicList.filter(
        (x) =>
            (!filters.toBuy ||
                x.status === ComicStatusEnum["A ser comprado"]) &&
            (!filters.unread || x.status === ComicStatusEnum["Não Lido"]) &&
            (!filters.read || x.status === ComicStatusEnum.Lido)
    );
};

function App() {
    const [filters, setFilters] = React.useState<FilterType>(
        filtersDisabledObject
    );
    const [graphsTabEnabled, setGraphsTabEnabled] =
        React.useState<boolean>(false);
    const [sagasListEnabled, setSagasListEnabled] =
        React.useState<boolean>(false);

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
                            }),
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
                            }),
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
                            }),
                                setGraphsTabEnabled(false);
                        }}>
                        Lido
                    </button>
                    <button
                        className="button-style"
                        onClick={() => {
                            setSagasListEnabled(!sagasListEnabled),
                                setGraphsTabEnabled(false);
                        }}>{`Lista : ${
                        !sagasListEnabled
                            ? "Graphic Novels"
                            : "Sagas Definitivas"
                    }`}</button>
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
                            sagasListEnabled ? SagasList : comicList,
                            filters
                        )}
                        sagasListEnabled={sagasListEnabled}
                    />
                ) : (
                    <StatisticsContainer />
                )}
            </div>
        </div>
    );
}

export default App;
