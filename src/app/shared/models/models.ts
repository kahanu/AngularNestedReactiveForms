export class Entity {
  id: any;
}



export class PhoneType extends Entity {
  type: string;
}

export class Phone extends Entity {
  phoneNumber: string;
  phoneTypeId: number;
}

export class Company extends Entity {
  name: string;
  fein: string;
  phones: Phone[];
}
