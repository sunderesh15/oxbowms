export class DataUtils {

    static parseHeaderInfo(headerResponse: any): string[] {
        if (headerResponse && headerResponse.attributeList &&
            headerResponse.attributeList.length > 0 ){
                const headers = [];
                headerResponse.attributeList.forEach(obj => {
                    headers.push(obj.label);
                });
                return headers;
            } else {
        return [];
            }

    }
}
