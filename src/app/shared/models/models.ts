export class Entity {
  id: string;
}



export class PhoneType extends Entity {
  type: string;
}

export class Phone extends Entity {
  phoneNumber: string;
  phoneTypeId: string;
}

export class Company extends Entity {
  name: string;
  fein: string;
  phones: Phone[];
}
