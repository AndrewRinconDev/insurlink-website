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
    name: 'Vida',
    shortName: 'vida',
    menuName: null,
    route: '/personas/vida',
  },
  {
    id: 2,
    name: 'Salud',
    shortName: 'salud',
    menuName: null,
    route: '/personas/salud',
  },
  {
    id: 3,
    name: 'Educación',
    shortName: 'educacion',
    menuName: null,
    route: '/personas/educacion',
  },
  {
    id: 4,
    name: 'Pensión',
    shortName: 'pension',
    menuName: null,
    route: '/personas/pension',
  },
  {
    id: 5,
    name: 'Hogar',
    shortName: 'hogar',
    menuName: null,
    route: '/personas/hogar',
  },
  {
    id: 6,
    name: 'Arriendo',
    shortName: 'arriendo',
    menuName: null,
    route: '/personas/arriendo',
  },
  {
    id: 7,
    name: 'Mascotas',
    shortName: 'mascotas',
    menuName: null,
    route: '/personas/mascotas',
  },
  {
    id: 8,
    name: 'Autos',
    shortName: 'autos',
    menuName: null,
    route: '/personas/autos',
  },
  {
    id: 9,
    name: 'Bicicletas',
    shortName: 'bicicletas',
    menuName: null,
    route: '/personas/bicicletas',
  },
  {
    id: 10,
    name: 'Viaje',
    shortName: 'viaje',
    menuName: null,
    route: '/personas/viaje',
  },
] as NavOption[];

export const companyOptions = [
  {
    id: 1,
    name: 'Cumplimiento',
    shortName: 'cumplimiento',
    route: '/empresas/cumplimiento',
  },
  {
    id: 2,
    name: 'Responsabilidad Civil',
    shortName: 'responsabilidad-civil',
    route: '/empresas/responsabilidad-civil',
  },
  {
    id: 3,
    name: 'Lineas Financieras',
    shortName: 'lineas-financieras',
    route: '/empresas/lineas-financieras',
  },
  {
    id: 4,
    name: 'Todo Riesgo construcción',
    shortName: 'todo-riesgo-construccion',
    route: '/empresas/todo-riesgo-construccion',
  },
  {
    id: 5,
    name: 'Montaje',
    shortName: 'montaje',
    route: '/empresas/montaje',
  },
  {
    id: 6,
    name: 'Maquinaría y Equipo',
    shortName: 'maquinaria-y-equipo',
    route: '/empresas/maquinaria-y-equipo',
  },
  {
    id: 7,
    name: 'Transporte',
    shortName: 'transporte',
    route: '/empresas/transporte',
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
