import { Pipe, PipeTransform } from "@angular/core";

declare const moment: any;
@Pipe({
  name: "dateFormNow",
})
export class DateFormNowPipe implements PipeTransform {
  transform(data: unknown, ...args: unknown[]): unknown {
    const startDate = new Date(0);
    startDate.setSeconds(Number(data));
    return moment(data).fromNow();
  }
}
