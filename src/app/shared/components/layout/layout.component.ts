import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import LoginComponent from '../login/login.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent,FooterComponent,HeaderComponent,RouterOutlet,LoginComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
  headerStatus: boolean = false;

}
