import React from "react";
import { GiftEntity } from "types";
import GiftsTableRow from "./GiftsTableRow";

interface Props {
    gifts: GiftEntity[];
}

const GiftsTable = (props: Props) => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Count</th>
            </tr>
        </thead>
        <tbody>
            {
                props.gifts.map(gift => <GiftsTableRow gift={gift} key={gift.id} />)
            }
        </tbody>
    </table>
);

export default GiftsTable;