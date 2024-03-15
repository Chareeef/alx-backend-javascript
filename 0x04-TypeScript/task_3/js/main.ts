/// <reference path="./crud.d.ts">
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const obj = {firstName: "Guillaume", lastName: "Salva"};
const newRowID: RowID = CRUD.insertRow(obj);
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
