import { Component } from '@angular/core';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.scss']
})
export class ComComponent {

  // ngOnInit(): void {
  //   const panels = document.querySelectorAll('.panel') as NodeListOf<HTMLElement>;

  //   panels.forEach((panel) => {
  //     panel.addEventListener('click', () => {
  //       this.removeActiveClasses(panels);
  //       panel.classList.add('active');
  //     });
  //   });
  // }

  // removeActiveClasses(panels: NodeListOf<HTMLElement>): void {
  //   panels.forEach((panel) => {
  //     panel.classList.remove('active');
  //   });
  // }
  ngOnInit(): void {
    const panels = document.querySelectorAll('.panel') as NodeListOf<HTMLElement>;

    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        this.removeActiveClasses(panels);
        panel.classList.add('active');
      });
    });
  }

  removeActiveClasses(panels: NodeListOf<HTMLElement>): void {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  }

  togglePanel(event: Event): void {
    const target = event.target as HTMLElement;
    target.classList.toggle('active');
  }

}
