import { calculateGameResult } from "./game_rules";
const Table = require("cli-table");

function showTable(elements: string[]) {
    const head: string[] = ["v User \\ PC >"];
    const rows: string[] = [];

    elements.forEach((element) => {
        head.push(element);
        rows.push(element);
    });

    const table = new Table();
    head.forEach((colName, index) => {
        const row = [colName];

        let result: string;

        rows.forEach((rowName) => {
            if (index === 0) {
                row.push(rowName);
                return;
            }

            if (head[index] === rowName) {
                result = "Draw";
            } else {
                result = calculateGameResult(elements, index - 1, rowName);
            }

            row.push(result);
        });
        table.push(row);
    });

    console.log(table.toString());
}

export { showTable };
