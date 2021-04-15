import {Loader} from "./loader.js"

const DEMO = [1,1,1,1,1,1,1,1];

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(DEMO)}
        })
    });

describe('Count todos', () => {
    it('should return count', async () => {
        const loader = new Loader()
        const result = await loader.getData();
        const EXPECTED_RESULE = DEMO.length;
        expect(result).toBe(EXPECTED_RESULE);
    });
});