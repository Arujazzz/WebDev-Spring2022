export interface company{
  id: number,
  name: string,
  description: string,
  city: string,
  address: string
}

export interface vacancy{
  id: number,
  name: string,
  description: string,
  salary: number,
  company_id: number
}

export interface AuthToken {
  token: string;
}
