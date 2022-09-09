export class Helper {
    public static Deserialize(data: string): any {
        return JSON.parse(data, Helper.ReviveDateTime);
    }

    /**
     * Convert string to date, if string is match with my regex
     * @param key A key of the object
     * @param value A value of the object
     * @returns 
     */
    private static ReviveDateTime(key: any, value: any): any {
        if (typeof value === 'string') {
            let a = /\/Date\(([\w-:.]*)\)\//.exec(value);
            if (a) {
                return new Date(a[1]);
            }
        }

        return value;
    }
}