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
};

const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

const HQContainer = ({ comicsList }: hqContainerProps) => {
    return (
        <div style={style as React.CSSProperties}>
            {comicsList.map((comic) => (
                <HQElement
                    key={comic.collectionNumber}
                    asset={`dcgbr${zeroPad(
                        comic.collectionNumber,
                        3
                    )}_br_1.webp`}
                    title={comic.label}
                    status={comic.status}
                    collectionNumber={comic.collectionNumber}
                />
            ))}
        </div>
    );
};

export default HQContainer;
