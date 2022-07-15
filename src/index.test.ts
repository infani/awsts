import * as awsts from './index';

describe('index', () => {
    it('index', async () => {
        expect(awsts).toMatchSnapshot();
    });
});