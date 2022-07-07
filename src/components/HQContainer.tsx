import React from "react";
import ComicType from "../model/ComicType";
import ConfusedFlash from "./ConfusedFlash";
import HQElement from "./HQElement";

const style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
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
            {comicsList.length ? (
                comicsList.map((comic) => (
                    <HQElement
                        key={comic.collectionNumber}
                        asset={assetAddressGenerator(comic.collectionNumber)}
                        title={comic.label}
                        status={comic.status}
                        collectionNumber={comic.collectionNumber}
                    />
                ))
            ) : (
                <ConfusedFlash />
            )}
        </div>
    );
};

export default HQContainer;
