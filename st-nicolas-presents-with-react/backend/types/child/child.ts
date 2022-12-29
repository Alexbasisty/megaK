import { GiftEntity } from "../gift";
import { ChildEntity } from "./child.entity";

export interface ListChildrenRes {
    childrenList: ChildEntity[];
    giftsList: GiftEntity[];
}