export interface Products {
  id: number;
  name: string;
  type:[{
    type1:boolean,
    type2:boolean
  }]
  category: string;
  supCategory: boolean,
  refrenceId: number;
  pass: string;
  deliveryFees: number;
  deliveryFeesPercentage: number
}
