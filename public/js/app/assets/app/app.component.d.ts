import { componentService } from './app.component.service';
export declare class AppComponent {
    private componentService;
    messages: Array<Object>;
    constructor(componentService: componentService);
    onSend(): void;
}
