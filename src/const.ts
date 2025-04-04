/* eslint-disable @typescript-eslint/no-explicit-any */
import localize from './localize';
import { BodymiscaleCardConfig, RenderBodyData } from './types';

let compute = {
  convertkgtolb: (v: any) => Math.round(Number(v) * 2.20462 * 10) / 10,
};

export const states = {
  status: {
    key: 'state',
    icon: 'mdi:scale-bathroom',
  },
  problem: {
    key: 'problem',
    icon: 'mdi:alert',
  },
  last_measurement_time: {
    key: 'last_measurement_time',
    icon: 'mdi:calendar-clock',
  },
};

export const attributes_kg = {
  weight: {
    key: 'weight',
    label: localize(`attributes.${'weight: '}`),
    unit: ' kg',
  },
  impedance: {
    key: 'impedance',
    label: localize(`attributes.${'impedance: '}`),
    unit: ' ohm',
    impedance_required: true,
  },
  height: {
    key: 'height',
    label: localize(`attributes.${'height: '}`),
    unit: ' cm',
  },
  age: {
    key: 'age',
    label: localize(`attributes.${'age: '}`),
    unit: localize(`unit.${' years'}`),
  },
  gender: {
    key: 'gender',
    label: localize(`attributes.${'gender: '}`),
  },
};

export const attributes_lb = {
  weight: {
    key: 'weight',
    label: localize(`attributes.${'weight: '}`),
    unit: ' lbs',
    compute: compute.convertkgtolb,
  },
  impedance: {
    key: 'impedance',
    label: localize(`attributes.${'impedance: '}`),
    unit: ' ohm',
    impedance_required: true,
  },
  height: {
    key: 'height',
    label: localize(`attributes.${'height: '}`),
    unit: ' cm',
  },
  age: {
    key: 'age',
    label: localize(`attributes.${'age: '}`),
    unit: localize(`unit.${' years'}`),
  },
  gender: {
    key: 'gender',
    label: localize(`attributes.${'gender: '}`),
  },
};

export const body_kg: Record<string, RenderBodyData> = {
  basal_metabolism: {
    key: 'basal_metabolism',
    label: localize(`body.${'basal_metabolism'}`),
    icon: '/local/images/bodyscoreIcon/basal_metabolism.png',
    unit: ' kcal',
    min: 0,
    max: 3000,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 1530, color: 'orangered' },
      { from: 1530.01, to: 3000, color: 'green' },
    ],
    target: 1530,
    width: '100%',
    impedance_required: false,
  },
  bmi: {
    key: 'bmi',
    label: localize(`body.${'bmi'}`),
    icon: '/local/images/bodyscoreIcon/bmi.png',
    min: 0,
    max: 40,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 18.5, color: 'blue' },
      { from: 18.51, to: 25, color: 'green' },
      { from: 25.01, to: 28, color: 'orange' },
      { from: 28.01, to: 32, color: 'orangered' },
      { from: 32.01, to: 40, color: 'red' },
    ],
    target: 21.75,
    width: '100%',
    impedance_required: false,
  },
  bmi_label: {
    key: 'bmi_label',
    label: localize(`body.${'bmi_label'}`),
    icon: '/local/images/bodyscoreIcon/body_type.png',
    min: null,
    max: null,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: null,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: null,
    target: null,
    width: '100%',
    impedance_required: false,
  },
  body_fat: {
    key: 'body_fat',
    label: localize(`body.${'body_fat'}`),
    icon: '/local/images/bodyscoreIcon/body_fat.png',
    unit: ' %',
    min: 0,
    max: 40,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 12, color: 'blue' },
      { from: 12.01, to: 18, color: 'royalblue' },
      { from: 18.01, to: 23, color: 'green' },
      { from: 23.01, to: 28, color: 'orange' },
      { from: 28.01, to: 40, color: 'orangered' },
    ],
    target: 20.5,
    width: '100%',
    impedance_required: true,
  },
  body_type: {
    key: 'body_type',
    label: localize(`body.${'body_type'}`),
    icon: '/local/images/bodyscoreIcon/body_type.png',
    color: 'var(--score-card-color, var(--ha-card-background))',
    min: null,
    max: null,
    height: null,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: null,
    target: null,
    width: '100%',
    impedance_required: true,
  },
  bone_mass: {
    key: 'bone_mass',
    label: localize(`body.${'bone_mass'}`),
    icon: '/local/images/bodyscoreIcon/bone_mass.png',
    unit: ' kg',
    min: 0,
    max: 8,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 2, color: 'orangered' },
      { from: 2.01, to: 4.2, color: 'green' },
      { from: 4.21, to: 8, color: 'darkgreen' },
    ],
    target: 3.1,
    width: '100%',
    impedance_required: true,
  },
  ideal: {
    key: 'ideal',
    label: localize(`body.${'ideal'}`),
    icon: '/local/images/bodyscoreIcon/ideal.png',
    unit: ' kg',
    min: 0,
    max: 130,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 57.3, color: 'blue' },
      { from: 57.31, to: 77.4, color: 'green' },
      { from: 77.41, to: 86.7, color: 'orange' },
      { from: 86.71, to: 99, color: 'orangered' },
      { from: 99.1, to: 130, color: 'red' },
    ],
    target: 67.35,
    width: '100%',
    impedance_required: false,
  },
  metabolic_age: {
    key: 'metabolic_age',
    label: localize(`body.${'metabolic_age'}`),
    icon: '/local/images/bodyscoreIcon/metabolic_age.png',
    unit: localize(`unit.${' years'}`),
    min: null,
    max: null,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: null,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: null,
    target: null,
    width: '100%',
    impedance_required: true,
  },
  muscle_mass: {
    key: 'muscle_mass',
    label: localize(`body.${'muscle_mass'}`),
    icon: '/local/images/bodyscoreIcon/muscle_mass.png',
    unit: ' kg',
    min: 0,
    max: 100,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 49.4, color: 'orangered' },
      { from: 49.41, to: 59.5, color: 'green' },
      { from: 59.51, to: 100, color: 'darkgreen' },
    ],
    target: 54.45,
    width: '100%',
    impedance_required: true,
  },
  protein: {
    key: 'protein',
    label: localize(`body.${'protein'}`),
    icon: '/local/images/bodyscoreIcon/protein.png',
    unit: ' %',
    min: 0,
    max: 32,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 16, color: 'orangered' },
      { from: 16.01, to: 20, color: 'green' },
      { from: 20.01, to: 32, color: 'darkgreen' },
    ],
    target: 18,
    width: '100%',
    impedance_required: true,
  },
  visceral_fat: {
    key: 'visceral_fat',
    label: localize(`body.${'visceral_fat'}`),
    icon: '/local/images/bodyscoreIcon/visceral_fat.png',
    min: 0,
    max: 20,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 10, color: 'green' },
      { from: 10.01, to: 15, color: 'orange' },
      { from: 15.01, to: 20, color: 'orangered' },
    ],
    target: 12.5,
    width: '100%',
    impedance_required: false,
  },
  water: {
    key: 'water',
    label: localize(`body.${'water'}`),
    icon: '/local/images/bodyscoreIcon/water.png',
    unit: ' %',
    min: 0,
    max: 80,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 55, color: 'orangered' },
      { from: 55.01, to: 65.1, color: 'green' },
      { from: 65.11, to: 80, color: 'darkgreen' },
    ],
    target: 60,
    width: '100%',
    impedance_required: true,
  },
  weight: {
    key: 'weight',
    label: localize(`body.${'weight'}`),
    icon: '/local/images/bodyscoreIcon/ideal.png',
    unit: ' kg',
    min: 0,
    max: 130,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 57.3, color: 'blue' },
      { from: 57.31, to: 77.4, color: 'green' },
      { from: 77.41, to: 86.7, color: 'orange' },
      { from: 86.71, to: 99, color: 'orangered' },
      { from: 99.1, to: 130, color: 'red' },
    ],
    target: 67.35,
    width: '100%',
    impedance_required: false,
  },
};
export const body_lb: Record<string, RenderBodyData> = {
  basal_metabolism: {
    key: 'basal_metabolism',
    label: localize(`body.${'basal_metabolism'}`),
    icon: '/local/images/bodyscoreIcon/basal_metabolism.png',
    unit: ' kcal',
    min: 0,
    max: 3000,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 1530, color: 'orangered' },
      { from: 1530.01, to: 3000, color: 'green' },
    ],
    target: 1530,
    width: '100%',
    impedance_required: false,
  },
  bmi: {
    key: 'bmi',
    label: localize(`body.${'bmi'}`),
    icon: '/local/images/bodyscoreIcon/bmi.png',
    min: 0,
    max: 40,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 18.5, color: 'blue' },
      { from: 18.51, to: 25, color: 'green' },
      { from: 25.01, to: 28, color: 'orange' },
      { from: 28.01, to: 32, color: 'orangered' },
      { from: 32.01, to: 40, color: 'red' },
    ],
    target: 21.75,
    width: '100%',
    impedance_required: false,
  },
  bmi_label: {
    key: 'bmi_label',
    label: localize(`body.${'bmi_label'}`),
    icon: '/local/images/bodyscoreIcon/body_type.png',
    min: null,
    max: null,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: null,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: null,
    target: null,
    width: '100%',
    impedance_required: false,
  },
  body_fat: {
    key: 'body_fat',
    label: localize(`body.${'body_fat'}`),
    icon: '/local/images/bodyscoreIcon/body_fat.png',
    unit: ' %',
    min: 0,
    max: 40,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 12, color: 'blue' },
      { from: 12.01, to: 18, color: 'royalblue' },
      { from: 18.01, to: 23, color: 'green' },
      { from: 23.01, to: 28, color: 'orange' },
      { from: 28.01, to: 40, color: 'orangered' },
    ],
    target: 20.5,
    width: '100%',
    impedance_required: true,
  },
  body_type: {
    key: 'body_type',
    label: localize(`body.${'body_type'}`),
    icon: '/local/images/bodyscoreIcon/body_type.png',
    color: 'var(--score-card-color, var(--ha-card-background))',
    min: null,
    max: null,
    height: null,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: null,
    target: null,
    width: '100%',
    impedance_required: true,
  },
  bone_mass: {
    key: 'bone_mass',
    label: localize(`body.${'bone_mass'}`),
    icon: '/local/images/bodyscoreIcon/bone_mass.png',
    unit: ' lbs',
    compute: compute.convertkgtolb,
    min: 0,
    max: 17.6,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 4.4, color: 'orangered' },
      { from: 4.5, to: 9.3, color: 'green' },
      { from: 9.4, to: 17.6, color: 'darkgreen' },
    ],
    target: 6.9,
    width: '100%',
    impedance_required: true,
  },
  ideal: {
    key: 'ideal',
    label: localize(`body.${'ideal'}`),
    icon: '/local/images/bodyscoreIcon/ideal.png',
    unit: ' lbs',
    compute: compute.convertkgtolb,
    min: 0,
    max: 286.6,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 126.3, color: 'blue' },
      { from: 126.4, to: 170.6, color: 'green' },
      { from: 170.7, to: 191.1, color: 'orange' },
      { from: 191.2, to: 218.5, color: 'orangered' },
      { from: 218.6, to: 286.6, color: 'red' },
    ],
    target: 148.5,
    width: '100%',
    impedance_required: false,
  },
  metabolic_age: {
    key: 'metabolic_age',
    label: localize(`body.${'metabolic_age'}`),
    icon: '/local/images/bodyscoreIcon/metabolic_age.png',
    unit: localize(`unit.${' years'}`),
    min: null,
    max: null,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: null,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: null,
    target: null,
    width: '100%',
    impedance_required: true,
  },
  muscle_mass: {
    key: 'muscle_mass',
    label: localize(`body.${'muscle_mass'}`),
    icon: '/local/images/bodyscoreIcon/muscle_mass.png',
    unit: ' lbs',
    compute: compute.convertkgtolb,
    min: 0,
    max: 220.5,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 108.9, color: 'orangered' },
      { from: 109, to: 131.2, color: 'green' },
      { from: 131.3, to: 220.5, color: 'darkgreen' },
    ],
    target: 120.1,
    width: '100%',
    impedance_required: true,
  },
  protein: {
    key: 'protein',
    label: localize(`body.${'protein'}`),
    icon: '/local/images/bodyscoreIcon/protein.png',
    unit: ' %',
    min: 0,
    max: 32,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 16, color: 'orangered' },
      { from: 16.01, to: 20, color: 'green' },
      { from: 20.01, to: 32, color: 'darkgreen' },
    ],
    target: 18,
    width: '100%',
    impedance_required: true,
  },
  visceral_fat: {
    key: 'visceral_fat',
    label: localize(`body.${'visceral_fat'}`),
    icon: '/local/images/bodyscoreIcon/visceral_fat.png',
    min: 0,
    max: 20,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 10, color: 'green' },
      { from: 10.01, to: 15, color: 'orange' },
      { from: 15.01, to: 20, color: 'orangered' },
    ],
    target: 12.5,
    width: '100%',
    impedance_required: false,
  },
  water: {
    key: 'water',
    label: localize(`body.${'water'}`),
    icon: '/local/images/bodyscoreIcon/water.png',
    unit: ' %',
    min: 0,
    max: 80,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 55, color: 'orangered' },
      { from: 55.01, to: 65.1, color: 'green' },
      { from: 65.11, to: 80, color: 'darkgreen' },
    ],
    target: 60,
    width: '100%',
    impedance_required: true,
  },
  weight: {
    key: 'weight',
    label: localize(`body.${'weight'}`),
    icon: '/local/images/bodyscoreIcon/ideal.png',
    unit: ' lbs',
    compute: compute.convertkgtolb,
    min: 0,
    max: 286.6,
    color: 'var(--score-card-color, var(--ha-card-background))',
    height: 30,
    positions: {
      icon: 'outside',
      name: 'inside',
      minmax: 'off',
      value: 'inside',
    },
    severity: [
      { from: 0, to: 126.3, color: 'blue' },
      { from: 126.4, to: 170.6, color: 'green' },
      { from: 170.7, to: 191.1, color: 'orange' },
      { from: 191.2, to: 218.5, color: 'orangered' },
      { from: 218.6, to: 286.6, color: 'red' },
    ],
    target: 148.5,
    width: '100%',
    impedance_required: false,
  },
};

export const buttons = {
  user1: {
    show: false,
    label: 'User1',
    icon: 'mdi:alpha-u-circle',
    entity: '',
  },
  user2: {
    show: false,
    label: 'User2',
    icon: 'mdi:alpha-u-circle',
    entity: '',
  },
  user3: {
    show: false,
    label: 'User3',
    icon: 'mdi:alpha-u-circle',
    entity: '',
  },
  user4: {
    show: false,
    label: 'User4',
    icon: 'mdi:alpha-u-circle',
    entity: '',
  },
  user5: {
    show: false,
    label: 'User5',
    icon: 'mdi:alpha-u-circle',
    entity: '',
  },
};

export const defaultCardConfig: Partial<BodymiscaleCardConfig> = {
  model: false,
  unit: false,
  theme: true,
  show_name: true,
  show_states: true,
  show_attributes: true,
  show_always_details: false,
  show_toolbar: true,
  show_body: true,
  show_buttons: false,
  attributes: {
    impedance: {
      key: 'impedance',
      impedance_required: true,
    },
  },
  body: {
    basal_metabolism: {
      key: 'basal_metabolism',
      min: 0,
      max: 3000,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 1530, color: 'orangered' },
        { from: 1530.01, to: 3000, color: 'green' },
      ],
      target: 1530,
      width: '100%',
      impedance_required: false,
    },
    bmi: {
      key: 'bmi',
      min: 0,
      max: 40,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 18.5, color: 'blue' },
        { from: 18.51, to: 25, color: 'green' },
        { from: 25.01, to: 28, color: 'orange' },
        { from: 28.01, to: 32, color: 'orangered' },
        { from: 32.01, to: 40, color: 'red' },
      ],
      target: 21.75,
      width: '100%',
      impedance_required: false,
    },
    bmi_label: {
      key: 'bmi_label',
      min: null,
      max: null,
      height: null,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: null,
      target: null,
      width: '100%',
      impedance_required: false,
    },
    body_fat: {
      key: 'body_fat',
      min: 0,
      max: 40,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 12, color: 'blue' },
        { from: 12.01, to: 18, color: 'royalblue' },
        { from: 18.01, to: 23, color: 'green' },
        { from: 23.01, to: 28, color: 'orange' },
        { from: 28.01, to: 40, color: 'orangered' },
      ],
      target: 20.5,
      width: '100%',
      impedance_required: true,
    },
    body_type: {
      key: 'body_type',
      min: null,
      max: null,
      height: null,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: null,
      target: null,
      width: '100%',
      impedance_required: true,
    },
    bone_mass: {
      key: 'bone_mass',
      min: 0,
      max: 8,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 2, color: 'orangered' },
        { from: 2.01, to: 4.2, color: 'green' },
        { from: 4.21, to: 8, color: 'darkgreen' },
      ],
      target: 3.1,
      width: '100%',
      impedance_required: true,
    },
    ideal: {
      key: 'ideal',
      min: 0,
      max: 130,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 57.3, color: 'blue' },
        { from: 57.31, to: 77.4, color: 'green' },
        { from: 77.41, to: 86.7, color: 'orange' },
        { from: 86.71, to: 99, color: 'orangered' },
        { from: 99.1, to: 130, color: 'red' },
      ],
      target: 67.35,
      width: '100%',
      impedance_required: false,
    },
    metabolic_age: {
      key: 'metabolic_age',
      min: null,
      max: null,
      height: null,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: null,
      target: null,
      width: '100%',
      impedance_required: true,
    },
    muscle_mass: {
      key: 'muscle_mass',
      min: 0,
      max: 100,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 49.4, color: 'orangered' },
        { from: 49.41, to: 59.5, color: 'green' },
        { from: 59.51, to: 100, color: 'darkgreen' },
      ],
      target: 54.45,
      width: '100%',
      impedance_required: true,
    },
    protein: {
      key: 'protein',
      min: 0,
      max: 32,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 16, color: 'orangered' },
        { from: 16.01, to: 20, color: 'green' },
        { from: 20.01, to: 32, color: 'darkgreen' },
      ],
      target: 18,
      width: '100%',
      impedance_required: true,
    },
    visceral_fat: {
      key: 'visceral_fat',
      min: 0,
      max: 20,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 10, color: 'green' },
        { from: 10.01, to: 15, color: 'orange' },
        { from: 15.01, to: 20, color: 'orangered' },
      ],
      target: 12.5,
      width: '100%',
      impedance_required: false,
    },
    water: {
      key: 'water',
      min: 0,
      max: 80,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 55, color: 'orangered' },
        { from: 55.01, to: 65.1, color: 'green' },
        { from: 65.11, to: 80, color: 'darkgreen' },
      ],
      target: 60,
      width: '100%',
      impedance_required: true,
    },
    weight: {
      key: 'weight',
      min: 0,
      max: 130,
      height: 30,
      positions: {
        icon: 'outside',
        name: 'inside',
        minmax: 'off',
        value: 'inside',
      },
      severity: [
        { from: 0, to: 57.3, color: 'blue' },
        { from: 57.31, to: 77.4, color: 'green' },
        { from: 77.41, to: 86.7, color: 'orange' },
        { from: 86.71, to: 99, color: 'orangered' },
        { from: 99.1, to: 130, color: 'red' },
      ],
      target: 67.35,
      width: '100%',
      impedance_required: false,
    },
  },
};
