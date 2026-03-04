import { 
	App, 
	Editor, 
	MarkdownView, 
	Modal, 
	Notice, 
	Plugin 
} from 'obsidian';
import { 
	DEFAULT_SETTINGS, 
	SidebarFoldSettings, 
	SidebarFoldSettingTab
} from "./settings";

// Remember to rename these classes and interfaces!

export default class SidebarFold extends Plugin {
	settings: SidebarFoldSettings;

	async onload() {
		await this.loadSettings();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SidebarFoldSettingTab(this.app, this));
	}

	onunload() {
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<SidebarFoldSettings>);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
