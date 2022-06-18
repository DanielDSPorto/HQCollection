import React from 'react';
import useImage from '../hooks/useImage';
import { ComicStatusEnum } from '../model/ComicStatusEnum';

type HQElementProps = {
    asset: string;
    title: string;
    status: ComicStatusEnum;
}

const wrapperDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid black",
    margin: "1em",
    padding: "1em 0",
    borderRadius: "10px",
    maxWidth: "350px"
};
const infoDivStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "1em"
};

const statusDivStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "1em"
};

const statusColorSelection = (status : ComicStatusEnum) => {
    let divColor : string;
    switch(status) {
        case 1:
            divColor = "#ffee93";
            break;
            case 2:
                divColor = "#a0ced9";
                break;
            default:
                divColor = "#ffc09f";
                break;
        }
    return divColor;
}


const HQElement = ({asset, title, status}: HQElementProps) => {
    const { loading, error, image } = useImage(asset);

    return (<div style={wrapperDivStyle as React.CSSProperties}>
        <>
            {/*@ts-expect-error*/}
            {error && <b>{error.message}</b>}
            {!error && loading ? <b>loading_image</b> : <img src={image} alt={`img_${title}`} width={"150px"}/>}
            <div style={infoDivStyle  as React.CSSProperties}>
                <b>{title}</b>
                <div style={statusDivStyle  as React.CSSProperties}>
                    <div style={{height: "20px", width: "20px", backgroundColor: statusColorSelection(status), marginRight: "1em"}} />
                    {ComicStatusEnum[status]}
                </div>
            </div>
        </>
    </div>)
}

export default HQElement