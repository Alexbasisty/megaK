import React from "react";
import { GiftEntity } from "types";
import GiftsTableRow from "./GiftsTableRow";

interface Props {
    gifts: GiftEntity[];
    onGiftsChange: () => void;
}

const GiftsTable = (props: Props) => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Count</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                props.gifts.map(gift => <GiftsTableRow gift={gift} key={gift.id} onGiftsChange={props.onGiftsChange} />)
            }
        </tbody>
    </table>
);

export default GiftsTable;