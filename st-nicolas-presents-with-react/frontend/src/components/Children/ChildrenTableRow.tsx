import React from "react";
import { ChildEntity, GiftEntity } from "types";
import ChilGiftSelect from "./ChilGiftSelect";

interface Props {
    child: ChildEntity;
    giftsList: GiftEntity[];
}

const ChildrenTableRow = (props: Props) => {

    return (
        <tr>
            <th>{props.child.name}</th>
            <td>
                <ChilGiftSelect giftsList={props.giftsList} selectedId={props.child.giftId} childId={props.child.id as string} />
            </td>
        </tr>
    );
}


export default ChildrenTableRow;