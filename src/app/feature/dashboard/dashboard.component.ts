import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { List } from './dashboard.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedRepoName = 'A';
  public repoList: List;

  @HostListener('scroll', ['$event'])
  scrollHandler(event) {
    this.scrollPage();
  }

  public copyReoList;
  constructor(private host: ElementRef, private _service: DashboardService) {}

  ngOnInit(): void {
    this.getRepoList();
  }

  private getRepoList() {
    this._service.getList().subscribe((response) => {
      this.repoList = response;
      this.copyReoList = { ...this.repoList };
    });
  }
  /** Fire event on page scroll */
  private scrollPage() {
    const element = document.querySelectorAll('#blockTitle');
    element.forEach((item) => {
      const bound: any = item.getBoundingClientRect();
      if (bound['top'] === 222 || parseInt(bound['top']) === 218) {
        console.log(bound['top']);
        this.setTitle(item['innerText']);
      }
    });
  }

  /** Set title sticky */
  public setTitle(title: string) {
    this.selectedRepoName = title;
  }
  get element() {
    return this.host.nativeElement;
  }

  /** Fire event to move to the target position*/
  public scroll(index: number) {
    const elementList = document.querySelectorAll('#target' + index);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start',
    });
  }

  public filterRepo(searchConstraint) {
    if (searchConstraint) {
      this.repoList = this.filterListResponse(searchConstraint);
    } else {
      this.repoList = this.copyReoList;
    }
  }

  /** Fire event on search type event */
  public filterListResponse(searchConstraint) {
    const filter = {};
    for (let key in this.repoList) {
      if (this.repoList.hasOwnProperty(key)) {
        let reposValue = this.repoList[key];
        const filterItems = reposValue.filter((item) => {
          if (
            item['moduleDescription']
              .toLocaleLowerCase()
              .includes(searchConstraint.toLocaleLowerCase()) ||
            item['moduleIdentity']
              .toLocaleLowerCase()
              .includes(searchConstraint.toLocaleLowerCase()) ||
            item['moduleName']
              .toLocaleLowerCase()
              .includes(searchConstraint.toLocaleLowerCase())
          ) {
            return item;
          }
        });
        if (filterItems.length) {
          filter[key] = filterItems;
        }
      }
    }
    return filter;
  }

  public groupByResponse() {
    // this.repoList.sort(function (a, b) {
    //   return a.moduleDescription > b.moduleDescription
    //     ? 1
    //     : b.moduleDescription > a.moduleDescription
    //     ? -1
    //     : 0;
    // });
  }
}
