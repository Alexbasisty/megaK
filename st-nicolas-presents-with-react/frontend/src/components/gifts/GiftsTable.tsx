import React from "react";
import { Gift } from "../../types/gifts";
import GiftsTableRow from "./GiftsTableRow";

interface Props {
    gifts: Gift[];
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