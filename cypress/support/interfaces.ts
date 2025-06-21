export interface UserData {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ProductData {
  name: string;
  price?: string;
  quantity?: number;
}

declare global {
  namespace Cypress {
    interface Chainable {
      registerUser(userData: UserData): Chainable<Element>;
      loginUser(loginData: LoginData): Chainable<Element>;
    }
  }
}
