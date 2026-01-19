import { abbreviazione } from './es_23.js';

describe("ESERCIZIO 23", () => {
    test('TEST 01', () => {
        expect(abbreviazione('Antonio Mancuso')).toBe('Antonio M.');
    });