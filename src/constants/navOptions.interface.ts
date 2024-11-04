import { MatMenuPanel } from "@angular/material/menu";


export interface NavOption {
  id?: number;
  name: string;
  menuName: MatMenuPanel<any> | null;
  subMenu?: NavOption[];
  route?: string;
}

// interface NavOption {
//   id: number;
//   name: string;
//   menuName: string;
//   submenu: PersonOption[] | CompanyOption[];
// }