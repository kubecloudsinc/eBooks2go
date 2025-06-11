export const LoginPageSelectors = {
  getUsernameInput: () => cy.get('#username'),
  getPasswordInput: () => cy.get('#password'),
  getSubmitButton: () => cy.get('#signIn'),
};

export interface ILoginPage {
  enterCredentials(username: string, password: string): void;
}
