import { User } from "../records/user";

let user: User;

beforeAll(() => {
    user = new User();
});

test('User should not be logged in', () => {
    expect(user.loggedIn).toEqual(false);
});

test('User logged in state should not be modified outside of the class', () => {
    expect(() => {
        user.loggedIn = true;
    }).toThrow();
});

test('User should have no e-mail at the beginning', () => {
    expect(user.email).toBeNull();
});

test('User e-mail should not be modified outside of the class', () => {
    expect(() => {
        user.email = 'whatever';
    }).toThrow();
});