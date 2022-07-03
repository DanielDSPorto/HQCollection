import { ComicStatusEnum } from "./ComicStatusEnum";

type ComicType = {
    label: string;
    collectionNumber: number;
    status: ComicStatusEnum;
    completionDate?: Date | String;
};

export default ComicType;
