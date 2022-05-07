import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'aggregatePipe',
    pure: false  // default is set to true.
})
export class AggregatePipe implements PipeTransform {

    transform(list: any[], field: string): number {
        if (list && field && list?.length!=0) {

            let filetredList=list.filter(s=> s[field]!=null && s[field]!=undefined && !isNaN(s[field]));
            if(filetredList.length>0)
            {
                let value = filetredList.map(item => item[field]).reduce((prev, next) => Number(prev) + Number(next));// 22
                return value;
            }
            else
            return null;
            
        }
        else return null;
    }
}