import { ComicStatusEnum } from "./ComicStatusEnum";

type ComicType = {
    label: string;
    collectionNumber: number;
    status: ComicStatusEnum;
}

export default ComicType;
