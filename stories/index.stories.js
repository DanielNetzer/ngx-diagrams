import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AppComponent } from 'projects/playground/src/app/app.component';
import { CustomLinkComponent } from 'projects/playground/src/app//components/custom-link/custom-link.component';
import { MarkdownWrapperComponent } from 'projects/playground/src/app/components/markdown-wrapper/markdown-wrapper.component';
import { NgxDiagramsModule, DefaultNodeComponent, DefaultPortComponent, DagreEngine } from 'ngx-diagrams';
import { MarkdownModule } from 'ngx-markdown';
import readme from '../README.md';

storiesOf('Docs', module)
	.addDecorator(
		moduleMetadata({
			imports: [MarkdownModule.forRoot()]
		})
	)
	.add('welcome', () => ({
		component: MarkdownWrapperComponent,
		props: {
			rawMarkdown: readme
		}
	}));

storiesOf('Examples', module)
	.addDecorator(
		moduleMetadata({
			imports: [NgxDiagramsModule],
			providers: [DagreEngine],
			entryComponents: [DefaultNodeComponent, DefaultPortComponent, CustomLinkComponent],
			declarations: [DefaultNodeComponent, DefaultPortComponent, CustomLinkComponent]
		})
	)
	.add('simple', () => ({
		component: AppComponent
	}));
