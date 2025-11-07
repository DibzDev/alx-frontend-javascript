// Task 8: Ambient declarations for CRUD operations
import { RowID, RowElement } from './interface';

declare module './crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}