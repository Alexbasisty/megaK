import { HttpMethod } from "../types/http-method";
import { MyRoute } from "../types/my-route";
import { RestDecoratorInfo } from "../types/rest-decorator";

export function rest(httpMethod: HttpMethod, path: string) {
    return (target: MyRoute, propertyName: string): any => {
        const ar: RestDecoratorInfo[] = Reflect.get(target, '_restApiCalls') ?? [];
        ar.push({
            httpMethod,
            path,
            propertyName,
        });
        
        Reflect.set(target, '_restApiCall', ar); 
    };
};

export function get(path: string) {
    return rest('get', path)
}

export function post(path: string) {
    return rest('post', path)
}

export function patch(path: string) {
    return rest('patch', path)
}