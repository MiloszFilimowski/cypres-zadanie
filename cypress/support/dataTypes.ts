export interface CustomerProfile {
  fullName: string;
  emailAddress: string;
  accountPassword: string;
  givenName: string;
  familyName: string;
  streetAddress: string;
  countryName: string;
  regionName: string;
  cityName: string;
  postalCode: string;
  phoneNumber: string;
}

export interface LoginCredentials {
  emailAddress: string;
  accountPassword: string;
}

export interface CustomerInquiry {
  contactName: string;
  contactEmail: string;
  inquiryTopic: string;
  messageContent: string;
}

export interface ProductInfo {
  itemName: string;
  itemPrice?: string;
  itemQuantity?: number;
}

declare global {
  namespace Cypress {
    interface Chainable {
      createNewCustomer(profile: CustomerProfile): Chainable<Element>;
      loginCustomer(credentials: LoginCredentials): Chainable<Element>;
    }
  }
}
