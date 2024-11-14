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
    menuName: "individual-life",
    submenu: individualLifeOptions,
  },
  {
    id: 2,
    name: 'Vida Grupo',
    menuName: "group-life",
    submenu: groupLifeOptions,
  },
  {
    id: 3,
    name: 'Generales',
    menuName: "general",
    submenu: generalOptions,
  },
  {
    id: 4,
    name: 'Autos',
    menuName: null,
    route: '/autos',
  },
  {
    id: 5,
    name: 'Mascotas',
    menuName: null,
    route: '/pets',
  },
  {
    id: 6,
    name: 'Viaje',
    menuName: null,
    route: '/travel',
  },
  {
    id: 7,
    name: 'Bicicletas',
    menuName: null,
    route: '/bikes',
  },
] as NavOption[];

export const companyOptions = [
  {
    name: 'Cumplimiento',
    route: '/compliance',
  },
  {
    name: 'RC',
    route: '/rc',
  },
  {
    name: 'Lineas Financieras',
    route: '/financial-lines',
  },
  {
    name: 'Todo Riesgo construcción',
    route: '/all-risk-construction',
  },
  {
    name: 'Montaje',
    route: '/assembly',
  },
  {
    name: 'Maquinaría y Equipo',
    route: '/machinery-and-equipment',
  },
  {
    name: 'Transporte',
    route: '/transport',
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
