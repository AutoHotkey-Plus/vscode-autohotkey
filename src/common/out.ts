import * as vscode from 'vscode';
import { OutputChannel } from 'vscode';

export class Out {
    public static log(value: any) {
        if (!this.channel) {
            this.channel = vscode.window.createOutputChannel('AHK');
        }
        this.channel.show(true);
        this.channel.appendLine(value + '');
    }

    private static channel: OutputChannel;
}
