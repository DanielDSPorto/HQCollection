import confusedFlashImg from "../assets/confused_flash.jpg";

const ConfusedFlash = () => {
    return (
        <div className="confused_flash">
            <img src={confusedFlashImg} alt={"flash didn't find any records"} />
            <b>Não há volumes para esse conjunto de filtros</b>
        </div>
    );
};

export default ConfusedFlash;
