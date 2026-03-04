import { 
	App, 
	PluginSettingTab, 
	Setting, 
	Notice
} from "obsidian";
import type SidebarFold from "./main";

export interface SidebarFoldSettings {
	visible_list_item_number: number;
}

export const DEFAULT_SETTINGS: SidebarFoldSettings = {
	visible_list_item_number: 7
}

export class SidebarFoldSettingTab extends PluginSettingTab {
	plugin: SidebarFold;

	constructor(app: App, plugin: SidebarFold) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Visible list item number')
			.setDesc('Change the number of visible items in the folded list')
			.addText((num) => {
			  num.inputEl.type = "number";
			  num.inputEl.inputMode = "numeric"; // 移动端数字键盘
			  num.inputEl.min = "1";
			  num.inputEl.max = "100";
			  num.inputEl.step = "1";

			  num
				.setValue(String(this.plugin.settings.visible_list_item_number))
				.onChange(async (value) => {
				  const n = Number(value);
				  if (!Number.isInteger(n) || n < 1) {
					new Notice('Please enter an integer greater than or equal to 1.');
					// this.plugin.settings.visible_list_item_number = DEFAULT_SETTINGS.visible_list_item_number;
					return;
				  }
				  this.plugin.settings.visible_list_item_number = n;
				  await this.plugin.saveSettings();
				})
					.setPlaceholder('Enter a number');
			});

	}
}
