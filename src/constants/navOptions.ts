import { NavOption } from "./navOptions.interface";

export const individualLifeOptions = [
  {
    name: 'Exequial',
    route: '/individual-life/1',
  },
  {
    name: 'Vida',
    route: '/individual-life/2',
  },
  {
    name: 'AP',
    route: '/individual-life/3',
  },
  {
    name: 'Salud',
    route: '/individual-life/4',
  },
  {
    name: 'Educación',
    route: '/individual-life/5',
  },
  {
    name: 'Seguro de pensión',
    route: '/individual-life/6',
  },
  {
    name: 'Enfermedades graves',
    route: '/individual-life/7',
  }
] as NavOption[];

export const groupLifeOptions = [
  {
    name: 'Exequial',
    route: '/group-life/1',
  },
  {
    name: 'Vida Grupo',
    route: '/group-life/2',
  },
  {
    name: 'Vida Deudores',
    route: '/group-life/3',
  },
  {
    name: 'Salud',
    route: '/group-life/4',
  }
] as NavOption[];

export const generalOptions = [
  {
    name: 'Hogar',
    route: '/general/1',
  },
  {
    name: 'Copropiedades',
    route: '/general/2',
  },
  {
    name: 'Arrendamiento',
    route: '/general/3',
  },
  {
    name: 'Exequial',
    route: '/general/4',
  }
] as NavOption[];

export const personOptions = [
  {
    id: 1,
    name: 'Vida Individual',
    menuName: null,
    route: '/persons/1',
  },
  {
    id: 2,
    name: 'Vida Grupo',
    menuName: null,
    route: '/persons/2',
  },
  {
    id: 3,
    name: 'Generales',
    menuName: null,
    route: '/persons/3',
  },
  {
    id: 4,
    name: 'Autos',
    menuName: null,
    route: '/persons/4',
  },
  {
    id: 5,
    name: 'Mascotas',
    menuName: null,
    route: '/persons/5',
  },
  {
    id: 6,
    name: 'Viaje',
    menuName: null,
    route: '/persons/6',
  },
  {
    id: 7,
    name: 'Bicicletas',
    menuName: null,
    route: '/persons/7',
  },
] as NavOption[];

export const companyOptions = [
  {
    id: 1,
    name: 'Cumplimiento',
    route: '/companies/1',
  },
  {
    id: 2,
    name: 'Responsabilidad Civil',
    route: '/companies/2',
  },
  {
    id: 3,
    name: 'Lineas Financieras',
    route: '/companies/3',
  },
  {
    id: 4,
    name: 'Todo Riesgo construcción',
    route: '/companies/4',
  },
  {
    id: 5,
    name: 'Montaje',
    route: '/companies/5',
  },
  {
    id: 6,
    name: 'Maquinaría y Equipo',
    route: '/companies/6',
  },
  {
    id: 7,
    name: 'Transporte',
    route: '/companies/7',
  }
] as NavOption[];

export const navOptions = [
  {
    id: 1,
    name: 'Personas',
    menuName: "person",
    submenu: personOptions,
  },
  {
    id: 2,
    name: 'Empresas',
    menuName: "company",
    submenu: companyOptions,
  }
] as unknown as NavOption[];
