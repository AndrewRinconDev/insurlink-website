import { MatMenuPanel } from "@angular/material/menu";


export interface NavOption {
  id?: number;
  name: string;
  menuName: MatMenuPanel<any> | null;
  submenu?: NavOption[];
  route?: string;
  shortName?: string;
}
