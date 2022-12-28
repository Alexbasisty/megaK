import React from "react";
import { Gift } from "../../types/gifts";

interface Props {
    gift: Gift;
}

const GiftsTableRow = (props: Props) => (
    <tr>
        <th>{props.gift.id}</th>
        <td>{props.gift.name}</td>
        <td>{props.gift.count}</td>
    </tr>
);

export default GiftsTableRow;