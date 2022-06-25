import React from "react";
import ComicType from "../model/ComicType";
import HQElement from "./HQElement";

const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

type hqContainerProps = {
    comicsList: ComicType[];
    assetAddressGenerator: (id: number) => string;
};

const HQContainer = ({
    comicsList,
    assetAddressGenerator,
}: hqContainerProps) => {
    return (
        <div style={style as React.CSSProperties}>
            {comicsList.map((comic) => (
                <HQElement
                    key={comic.collectionNumber}
                    asset={assetAddressGenerator(comic.collectionNumber)}
                    title={comic.label}
                    status={comic.status}
                    collectionNumber={comic.collectionNumber}
                />
            ))}
        </div>
    );
};

export default HQContainer;
