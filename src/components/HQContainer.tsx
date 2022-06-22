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
    sagasListEnabled: boolean;
};

const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

const HQContainer = ({ comicsList, sagasListEnabled }: hqContainerProps) => {
    const assetsTemplateString = (collectionNumber: number) =>
        !sagasListEnabled
            ? `dcgbr${zeroPad(collectionNumber, 3)}_br_1.webp`
            : `dcgbr5${zeroPad(collectionNumber, 2)}_br_1.webp`;
    return (
        <div style={style as React.CSSProperties}>
            {comicsList.map((comic) => (
                <HQElement
                    key={comic.collectionNumber}
                    asset={assetsTemplateString(comic.collectionNumber)}
                    title={comic.label}
                    status={comic.status}
                    collectionNumber={comic.collectionNumber}
                />
            ))}
        </div>
    );
};

export default HQContainer;
